<template>
  <v-app class="vapp-fullscreen-background" style="overflow: hidden;" :class="appClass"
    :style="appStyle"
  >
    <transition name="fade">
      <div class="loading" v-show="isloading">
        <loader></loader>
      </div>
    </transition>

    <video autoplay loop muted class="video-bg" id="bg-video" ref="VdPlayer"
      :style="videoStyle"
    >
      <source :src="videosrc" type="video/mp4">
    </video>

    <!-- 主页按钮和标题 - 左上角 -->
    <div class="home-btn-container">
      <v-btn class="zzj-nav-btn" color="var(--leleo-vcard-color)" variant="tonal"
        icon="mdi-home" @click="goHome"
      ></v-btn>
      <span class="navigation-main-title-left">网址导航</span>
      <a href="https://blog.zzjjack.us.kg" target="_blank" class="blog-link">博客</a>
    </div>

    <div class="floating-switch-container">
      <v-switch v-model="isClearScreen" inset :style="switchStyle"
        class="floating-switch" @mouseover="expandSwitch" @mouseleave="collapseSwitch"
      ></v-switch>
    </div>

    <div v-show="!isloading && !isClearScreen" class="main-container">
      <div class="content-wrapper">
        <!-- 左侧区域 - 固定 -->
        <div class="left-sidebar">
          <div class="left-content-wrapper">
            <!-- 分类导航按钮 -->
            <div class="category-nav-container">
              <v-btn
                v-for="(category, index) in navigationLinks"
                :key="index"
                class="category-nav-btn"
                variant="tonal"
                color="var(--leleo-vcard-color)"
                size="small"
                @click="scrollToCategory(index)"
              >
                {{ category.name }}
              </v-btn>
            </div>

            <!-- 头像 -->
            <div class="avatar-container" align="center">
              <v-avatar class="leleo-avatar" :size="avatarSize"
                :style="avatarMargin"
              >
                <v-img alt="Leleo" :src="configdata.avatar"></v-img>
              </v-avatar>
            </div>

            <!-- 欢迎标题 -->
            <div :style="welcomeDisplay" class="leleo-left-welcome" align="center">
              {{ configdata.welcometitle }}
            </div>

            <!-- 打字机效果 -->
            <typewriter class="ma-2 d-flex align-center justify-center" style="min-height: 120px;"></typewriter>

            <!-- 联系方式 -->
            <div class="contact-container" :style="contactMargin" align="center">
              <v-row align="center" justify="center">
                <v-col class="pa-1" cols="auto" v-for="(item, index) in socialPlatformIcons" :key="index">
                  <v-btn :size="socialIconSize" variant="tonal" color="var(--leleo-vcard-color)" class="ma-1 leleo-social-bticon"
                    icon :href="item.link" target="_blank"
                  >
                    <v-icon :icon="item.icon" :size="socialIconInnerSize" class="social-bticon-icon"></v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>

            <!-- 版权信息 -->
            <div class="copyright-info" align="center">
              {{ statement[0] }}
            </div>
          </div>
        </div>

        <!-- 右侧区域 - 可滚动 -->
        <div class="right-content" ref="rightContent" @scroll="handleScroll">
          <div class="navigation-wrapper">
            <v-container>
              <div v-for="(category, catIndex) in navigationLinks" :key="catIndex" :ref="el => setCategoryRef(el, catIndex)" class="category-section">
                <v-card class="navigation-card ma-3"
                  variant="tonal"
                  :style="navCardStyle"
                >
                  <v-card-title class="navigation-category-title">{{ category.name }}</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col v-for="(link, linkIndex) in category.links" :key="linkIndex" cols="6" md="4" lg="3" class="pa-2 d-flex flex-column">
                      <v-btn class="navigation-link-btn" variant="tonal" :color="'var(--leleo-vcard-color)'"
                        :href="link.url" target="_blank"
                        :style="navLinkBtnStyle"
                      >
                        <v-img v-if="link.icon && link.icon.startsWith('http')" :src="link.icon" class="mr-2"
                          width="24" height="24" contain
                        ></v-img>
                        <v-icon v-else-if="link.icon" :icon="link.icon" class="mr-2"
                          :size="navLinkIconSize"
                        ></v-icon>
                        <span>{{ link.name }}</span>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
          </v-container>
        </div>
      </div>

      <!-- 回到顶部按钮 -->
        <transition name="fade">
          <div v-show="showBackToTop" class="back-to-top-container" @click="scrollToTop">
            <v-btn
              size="default"
              color="var(--leleo-vcard-color)"
              variant="tonal"
              icon="mdi-chevron-up"
              class="back-to-top-btn"
            ></v-btn>
          </div>
        </transition>
      </div>
    </div>
  </v-app>
</template>

<script src="./app.js"></script>
<style scoped>
  @import url(/css/app.less);
  @import url(/css/mobile.less);

  /* 主页按钮容器 - 左上角 */
  .home-btn-container {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* 返回主页按钮样式 */
  .zzj-nav-btn {
    width: 40px;
    height: 40px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .zzj-nav-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  /* 博客链接样式 */
  .blog-link {
    font-family: "ZHBGBXT";
    font-size: 1.2rem;
    color: var(--leleo-vcard-color);
    text-decoration: none;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--leleo-vcard-color);
    border-radius: 8px;
    transition: all 0.3s ease;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .blog-link:hover {
    background: var(--leleo-vcard-color);
    color: #000;
  }

  /* 左上角网址导航标题样式 */
  .navigation-main-title-left {
    font-family: "ZHBGBXT";
    font-size: 2rem;
    font-weight: normal;
    color: var(--leleo-vcard-color);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: -8px;
    }
  
    /* 主容器 */
  .main-container {
    height: 100vh;
    overflow: hidden;
  }

  .content-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
  }

  /* 左侧边栏 - 固定 */
  .left-sidebar {
    height: 100vh;
    width: 25%;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .left-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 100%;
    margin-left: 200px;
  }

  /* 分类导航按钮容器 */
  .category-nav-container {
    position: fixed;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 100;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .category-nav-btn {
    min-width: 80px;
    font-size: 0.8rem;
    text-transform: none;
    letter-spacing: 0;
    transition: all 0.3s ease;
  }

  .category-nav-btn:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .avatar-container {
    margin-bottom: 0.5rem;
    position: relative;
  }

  .leleo-avatar {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  }

  .leleo-avatar:hover {
    transform: scale(1.05);
  }

  /* 欢迎标题 - 使用原来的字体 */
  .leleo-left-welcome {
    margin-top: 10px;
    width: 100%;
    color: var(--leleo-welcomtitle-color);
    padding: 0 2rem;
    font-family: "myfont";
    font-size: 4rem;
    text-align: center;
  }

  /* 右侧内容 - 可滚动 */
  .right-content {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 1rem;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  .right-content::-webkit-scrollbar {
    width: 6px;
  }

  .right-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .right-content::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  /* 版权信息样式 */
  .copyright-info {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: var(--leleo-vcard-color);
    opacity: 0.7;
    text-align: center;
  }

  /* 导航链接区域样式 */
  .navigation-wrapper {
    min-height: 100%;
    padding: 1rem 0;
  }

  /* 回到顶部按钮容器 */
  .back-to-top-container {
    position: fixed;
    right: 10px;
    bottom: 20%;
    z-index: 99;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.7;
    transform: scale(0.9);
  }

  .back-to-top-container:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  .back-to-top-btn {
    border-radius: 50%;
  }

  .back-to-top-btn .v-icon {
    font-size: 28px;
  }

  /* 响应式设计 */
  @media (max-width: 960px) {
    .navigation-main-title-left {
      font-size: 1.6rem;
      letter-spacing: 1px;
      height: 40px;
      display: flex;
      align-items: center;
      margin-top: -8px;
      }

      .back-to-top-container {
      bottom: 15%;
      right: 8px;
    }

    .back-to-top-btn .v-icon {
      font-size: 24px;
    }

    .category-nav-container {
      display: none;
    }

    .left-content-wrapper {
      margin-left: 0;
    }
  }

  .category-section {
    width: 100%;
  }

  .navigation-card {
    border-radius: 12px;
    backdrop-filter: blur(var(--leleo-blur));
    margin-bottom: 1.5rem;
  }

  .navigation-link-btn {
    transition: all 0.3s ease;
  }

  .navigation-link-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.15);
  }

  .navigation-category-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--leleo-vcard-color);
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
/* 导航链接按钮样式 */
  .navigation-link-btn {
    border-radius: 0;
    width: 100%;
    height: 100%;
    text-align: left;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    aspect-ratio: 1;
  }

  .navigation-link-btn .v-btn__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .navigation-link-btn:hover {
    transform: translateX(3px);
    background-color: rgba(255, 255, 255, 0.15);
  }

  /* 联系方式容器样式 */
  .contact-container {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 0.5rem;
    backdrop-filter: blur(var(--leleo-blur));
    max-width: 200px;
  }

  /* 响应式设计 */
  @media (max-width: 960px) {
    .content-wrapper {
      flex-direction: column;
    }

    .left-sidebar {
      width: 100%;
      height: auto;
      min-width: auto;
      padding: 1rem 0;
    }

    .right-content {
      height: auto;
      overflow: visible;
      padding: 0 0.5rem;
    }

    .main-container {
      height: auto;
      overflow: visible;
    }

    .navigation-wrapper {
      padding: 0.5rem 0;
    }

    .navigation-category-title {
      font-size: 1.2rem;
    }

    .contact-container {
      max-width: 180px;
    }

    .leleo-left-welcome {
      font-size: 2.5rem;
    }

    .home-btn-container {
      top: 10px;
      left: 10px;
      gap: 8px;
    }

    .navigation-main-title-left {
      font-size: 1.4rem;
      letter-spacing: 1px;
      height: 40px;
      display: flex;
      align-items: center;
      margin-top: -8px;
      }
    }
  }
 </style>
