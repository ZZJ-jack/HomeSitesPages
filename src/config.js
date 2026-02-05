const config = {
	//网页元数据
	metaData: {
		title: 'ZZJ的网址导航',
		description: '欢迎来到ZZJ的奇妙世界！',
		keywords: 'ZZJ,ZZJ-JACK,个人主页,个人网站',
		icon: '/img/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/logo.jpg", // 头像
	welcometitle: "Hi, I'm ZZJ", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 10, // 毛玻璃模糊效果

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "书房夜晚",
				"preview": "/img/wallpaper/static/书房夜晚/image-pre.webp",
				"url": "/img/wallpaper/static/书房夜晚/image.png"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"
			},
		}
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/ZZJ-jack" },
		{ icon: "mdi-email", link: "mailto:zzjjack@139.com" },
		{ icon: "mdi-qqchat", link: "https://im.qq.com/" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
	],

	//打字机
	typeWriterStrings: [
		"生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。",
		"你说要攀上最高的山看日出，我却爱上了半路的松涛与夜雾。",
		"心若看得见缝隙，光便有了形状；人若懂得低头，路便多了远方。",
		"时间像沙，握不紧却铺成了路，每一步都是写给世界的签名。",
		"山沉默千年才懂得高度，你却在追问中错过自己的海拔。",
		"所谓自由不过是选择自己的牢笼，并在其中起舞。",
		"当向日葵不再追日，它发现了自己旋转的宇宙。",
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//导航链接
	navigationLinks: [
		{
			name: "网页工具",
			links: [
				{ name: "刘明野的工具箱", url: "https://tools.liumingye.cn/", icon: "https://tools.liumingye.cn/favicon.ico" },
				{ name: "在线工具", url: "https://tool.lu/", icon: "https://tool.lu/favicon.ico" },
				{ name: "ALL TO ALL", url: "https://www.alltoall.net/", icon: "https://www.alltoall.net/favicon.ico" },
				{ name: "临时邮箱", url: "https://mail.cx/zh/", icon: "https://mail.cx/favicon.ico" },
				{ name: "SM.MS", url: "https://smms.app/", icon: "https://smms.app/favicon.ico" },
				{ name: "AbeimAPI", url: "https://res.abeim.cn/api/", icon: "https://res.abeim.cn/favicon.ico" },
				{ name: "UApi", url: "https://uapis.cn/zh_cn/", icon: "https://uapis.cn/favicon.ico" }
			]
		},
		{
			name: "设计素材",
			links: [
				{ name: "Pexels", url: "https://www.pexels.com/", icon: "https://www.pexels.com/favicon.ico" },
				{ name: "Flaticon", url: "https://www.flaticon.com/", icon: "https://www.flaticon.com/favicon.ico" },
				{ name: "可画", url: "https://www.canva.cn/", icon: "https://www.canva.cn/favicon.ico" },
				{ name: "Color Hunt", url: "https://colorhunt.co/", icon: "https://colorhunt.co/favicon.ico" },
				{ name: "TinyPNG", url: "https://tinify.cn/", icon: "https://tinify.cn/favicon.ico" }
			]
		},
		{
			name: "影音游戏",
			links: [
				{ name: "小云搜索", url: "https://yunso.net/", icon: "https://yunso.net/favicon.ico" },
				{ name: "千帆搜索", url: "https://www.niceso.fun/", icon: "https://www.niceso.fun/favicon.ico" },
				{ name: "音乐搜索器", url: "http://www.xmsj.org/", icon: "http://www.xmsj.org/favicon.ico" },
				{ name: "Switch520", url: "https://www.gamer520.com/", icon: "https://www.gamer520.com/favicon.ico" },
				{ name: "flysheep资源避难所", url: "https://www.flysheep6.com/", icon: "https://www.flysheep6.com/favicon.ico" }
			]
		},
		{
			name: "摸鱼娱乐",
			links: [
				{ name: "神奇海螺试验场", url: "https://lab.magiconch.com/", icon: "https://lab.magiconch.com/favicon.ico" },
				{ name: "Life Restart", url: "https://liferestart.syaro.io/public/", icon: "https://liferestart.syaro.io/favicon.ico" },
				{ name: "FakeUpdate", url: "https://fakeupdate.net/", icon: "https://fakeupdate.net/favicon.ico" }
			]
		}
	],

	statement: ["Copyright © 2026 ZZJ"],
}

export default config
