import typewriter from './components/typewriter.vue';
import loader from './components/loader.vue';
import config from './config.js';
import { getCookie } from './utils/cookieUtils.js';
import { setMeta, dataConsole } from './utils/common.js';
import { useDisplay } from 'vuetify'

export default {
  components: {
    loader, typewriter
  },
  setup() {
    const { xs, sm } = useDisplay();
    return { xs, sm };
  },
  data() {
    return {
      isloading: false,
      isClearScreen: false,
      configdata: config,
      videosrc: '',
      socialPlatformIcons: null,
      isExpanded: false,
      navigationLinks: null,
      showBackToTop: false,
      categoryRefs: [],
      statement: config.statement,
    };
  },

  computed: {
    // v-app class
    appClass() {
      return { 'radius-before': !this.xs };
    },

    // v-app style
    appStyle() {
      if (this.xs) {
        return { height: '100%', width: '100%', top: '0', left: '0' };
      } else if (this.sm) {
        return { height: '98%', width: '98%', top: '1%', left: '1%' };
      } else {
        return { height: '96.6%', width: '99%', top: '1.7%', left: '0.5%' };
      }
    },

    // video style
    videoStyle() {
      let baseStyle = {};
      if (this.xs) {
        baseStyle = { height: '100%', width: '100%', top: '0', left: '0' };
      } else if (this.sm) {
        baseStyle = { height: '98%', width: '98%', top: '1%', left: '1%', 'border-radius': '16px' };
      } else {
        baseStyle = { height: '96.6%', width: '99%', top: '1.7%', left: '0.5%', 'border-radius': '16px' };
      }
      return baseStyle;
    },

    // switch style
    switchStyle() {
      return this.xs ? { transform: 'scale(0.6) translateX(15%)' } : {};
    },

    // avatar size
    avatarSize() {
      return this.xs || this.sm ? 180 : 220;
    },

    // avatar margin style
    avatarMargin() {
      return this.xs || this.sm ? { 'margin-top': '0.5rem' } : { 'margin-top': '0.5rem' };
    },

    // welcome display style
    welcomeDisplay() {
      return this.xs || this.sm ? { display: 'none' } : {};
    },

    // contact margin style
    contactMargin() {
      return this.xs || this.sm ? { 'margin-top': '0.5rem' } : { 'margin-top': '1rem' };
    },

    // social icon size
    socialIconSize() {
      return this.xs ? 22 : 28;
    },

    // social icon inner size
    socialIconInnerSize() {
      return this.xs ? 16 : 20;
    },

    // navigation card style
    navCardStyle() {
      return this.xs || this.sm
        ? { margin: '0.5rem', padding: '1rem' }
        : { margin: '1rem', padding: '2rem' };
    },

    // navigation link button style
    navLinkBtnStyle() {
      return this.xs || this.sm
        ? { padding: '1rem', margin: '0.5rem', fontSize: '0.9rem', minHeight: '5rem' }
        : { padding: '1.5rem', margin: '0.75rem', fontSize: '1rem', minHeight: '6rem' };
    },

    // navigation link icon size
    navLinkIconSize() {
      return this.xs || this.sm ? 20 : 24;
    }
  },

  async mounted() {
    if (import.meta.env.VITE_CONFIG) {
      this.configdata = JSON.parse(import.meta.env.VITE_CONFIG);
    }
    this.socialPlatformIcons = this.configdata.socialPlatformIcons;
    this.navigationLinks = this.configdata.navigationLinks;
    this.isloading = true;
    let imageurl = "";
    this.dataConsole();
    this.setMeta(this.configdata.metaData.title, this.configdata.metaData.description, this.configdata.metaData.keywords, this.configdata.metaData.icon);

    imageurl = this.setMainProperty(imageurl);

    //异步等待背景壁纸包括视频壁纸加载完成后再显示页面
    const loadImage = () => {
      const imageUrls = [
        config.avatar
      ];
      return new Promise((resolve, reject) => {
        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const imgs = new Image();
            imgs.src = url;
            imgs.onload = () => resolve();
            imgs.onerror = (err) => reject(err);
          });
        })

        // 设置超时机制：2.5秒
        const timeoutPromise = new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2500);
        });

        // 等待所有图片加载完成或超时
        Promise.race([Promise.all(imagePromises), timeoutPromise]).then(() => {
          if (imageurl) {
            const img = new Image();
            img.src = imageurl;
            // resolve() 函数通将一个 Promise 对象从未完成状态转变为已完成状态
            img.onload = () => { resolve(); };
            img.onerror = (err) => { reject(err); };
          } else {
            const video = this.$refs.VdPlayer;
            video.onloadedmetadata = () => {
              setTimeout(() => {
              }, "200");
              resolve();
            };
            video.onerror = (err) => { resolve(); };
          }
        })
      });
    };

    loadImage().then(() => {
      setTimeout(() => {
        this.isloading = false;
      }, "500");
    }).catch((err) => {
      console.error('壁纸加载失败:', err);
      setTimeout(() => {
        this.isloading = false;
      }, "100");
    });
  },

  watch: {
    isClearScreen(val) {
      if (!this.videosrc) {
        return
      }
      if (val) {
        this.$refs.VdPlayer.style.zIndex = 0;
        this.$refs.VdPlayer.controls = true;
      } else {
        this.$refs.VdPlayer.style.zIndex = -100;
        this.$refs.VdPlayer.controls = false;
      }
    },
  },

  methods: {
    getCookie, setMeta, dataConsole,

    setMainProperty(imageurl) {
      const root = document.documentElement;
      let leleodata = this.getCookie("leleodata");
      if (leleodata) {
        root.style.setProperty('--leleo-welcomtitle-color', `${leleodata.color.welcometitlecolor}`);
        root.style.setProperty('--leleo-vcard-color', `${leleodata.color.themecolor}`);
        root.style.setProperty('--leleo-brightness', `${leleodata.brightness}%`);
        root.style.setProperty('--leleo-blur', `${leleodata.blur}px`);
      } else {
        root.style.setProperty('--leleo-welcomtitle-color', `${this.configdata.color.welcometitlecolor}`);
        root.style.setProperty('--leleo-vcard-color', `${this.configdata.color.themecolor}`);
        root.style.setProperty('--leleo-brightness', `${this.configdata.brightness}%`);
        root.style.setProperty('--leleo-blur', `${this.configdata.blur}px`);
      }

      let leleodatabackground = this.getCookie("leleodatabackground");
      const { xs } = useDisplay();
      if (leleodatabackground) {
        if (xs.value) {
          if (leleodatabackground.mobile.type == "pic") {
            root.style.setProperty('--leleo-background-image-url', `url('${leleodatabackground.mobile.datainfo.url}')`);
            imageurl = leleodatabackground.mobile.datainfo.url;
            return imageurl;
          } else {
            this.videosrc = leleodatabackground.mobile.datainfo.url;
          }
        } else {
          if (leleodatabackground.pc.type == "pic") {
            root.style.setProperty('--leleo-background-image-url', `url('${leleodatabackground.pc.datainfo.url}')`);
            imageurl = leleodatabackground.pc.datainfo.url;
            return imageurl;
          } else {
            this.videosrc = leleodatabackground.pc.datainfo.url;
          }
        }

      } else {
        if (xs.value) {
          if (this.configdata.background.mobile.type == "pic") {
            root.style.setProperty('--leleo-background-image-url', `url('${this.configdata.background.mobile.datainfo.url}')`);
            imageurl = this.configdata.background.mobile.datainfo.url;
            return imageurl;
          } else {
            this.videosrc = this.configdata.background.mobile.datainfo.url;
          }
        } else {
          if (this.configdata.background.pc.type == "pic") {
            root.style.setProperty('--leleo-background-image-url', `url('${this.configdata.background.pc.datainfo.url}')`);
            imageurl = this.configdata.background.pc.datainfo.url;
            return imageurl;
          } else {
            this.videosrc = this.configdata.background.pc.datainfo.url;
          }

        }
      }
    },

    jump(url) {
      window.open(url, '_blank').focus();
    },
    goHome() {
      window.open('https://zzjjack.us.kg', '_blank').focus();
    },
    expandSwitch() {
      this.isExpanded = true;
    },
    collapseSwitch() {
      this.isExpanded = false;
    },
    handleScroll() {
      const rightContent = this.$refs.rightContent;
      if (rightContent) {
        this.showBackToTop = rightContent.scrollTop > 100;
      }
    },
    scrollToTop() {
      const rightContent = this.$refs.rightContent;
      if (rightContent) {
        rightContent.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    setCategoryRef(el, index) {
      if (el) {
        this.categoryRefs[index] = el;
      }
    },
    scrollToCategory(index) {
      const categoryEl = this.categoryRefs[index];
      const rightContent = this.$refs.rightContent;
      if (categoryEl && rightContent) {
        const scrollTop = categoryEl.offsetTop - 20;
        rightContent.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    },
  }
};
