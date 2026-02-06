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
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
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
			name: "影视资源",
			links: [
				{ name: "低端影视", url: "https://ddys.la/", icon: "https://ddys.la/favicon.ico" },
				{ name: "青禾影视", url: "https://tv.qhdaohang.cn/", icon: "https://tv.qhdaohang.cn/favicon.ico" },
				{ name: "茉小影", url: "https://www.moxy.top/", icon: "https://www.moxy.top/favicon.ico" },
				{ name: "努努影院", url: "https://nnyy.la/", icon: "https://nnyy.la/favicon.ico" },
				{ name: "猴影工坊", url: "https://monkey-flix.com/", icon: "https://monkey-flix.com/favicon.ico" },
				{ name: "嘀嗒影视", url: "https://www.didahd.pro/", icon: "https://www.didahd.pro/favicon.ico" },
				{ name: "影猫の仓库", url: "https://www.ymck.pro/", icon: "https://www.ymck.pro/favicon.ico" },
				{ name: "3Q影视", url: "https://qqqys.com/", icon: "https://qqqys.com/favicon.ico" },
				{ name: "真狼影视", url: "https://www.zhenlang.cc/", icon: "https://www.zhenlang.cc/favicon.ico" },
				{ name: "厂长资源", url: "https://www.czzymovie.com/", icon: "https://www.czzymovie.com/favicon.ico" },
				{ name: "注视影视", url: "https://sszzyy.com/", icon: "https://sszzyy.com/favicon.ico" },
				{ name: "影视工厂", url: "http://2.ysgc.top/", icon: "http://2.ysgc.top/favicon.ico" },
				{ name: "修罗影视", url: "https://xl01.com.de/", icon: "https://xl01.com.de/favicon.ico" },
				{ name: "LibreTV", url: "https://libretv.liumingye.cn/", icon: "https://libretv.liumingye.cn/favicon.ico" }
			]
		},
		{
			name: "音乐资源",
			links: [
				{ name: "SPlayer", url: "https://music.qier222.com/", icon: "https://music.qier222.com/favicon.ico" },
				{ name: "铜钟", url: "https://tonzhon.com/", icon: "https://tonzhon.com/favicon.ico" },
				{ name: "MusicFree", url: "https://musicfree.upup.fun/", icon: "https://musicfree.upup.fun/favicon.ico" },
				{ name: "布谷音乐", url: "https://www.qqmp3.vip/", icon: "https://www.qqmp3.vip/favicon.ico" },
				{ name: "OvO音乐", url: "https://ovoeo.cn/", icon: "https://ovoeo.cn/favicon.ico" },
				{ name: "ZZ123音乐", url: "https://zz123.com/", icon: "https://zz123.com/favicon.ico" },
				{ name: "网易云第三方", url: "https://netease-music.fe-mm.com/", icon: "https://netease-music.fe-mm.com/favicon.ico" }
			]
		},
		{
			name: "电子书阅读",
			links: [
				{ name: "安娜的档案", url: "https://zh.annas-archive.org/", icon: "https://zh.annas-archive.org/favicon.ico" },
				{ name: "书格", url: "https://www.shuge.org/", icon: "https://www.shuge.org/favicon.ico" },
				{ name: "鸠摩搜索", url: "https://www.jiumodiary.com/", icon: "https://www.jiumodiary.com/favicon.ico" },
				{ name: "SoBooks", url: "https://sobooks.cc/", icon: "https://sobooks.cc/favicon.ico" },
				{ name: "一单书", url: "https://yidanshu.com/", icon: "https://yidanshu.com/favicon.ico" },
				{ name: "蜜蜂PDF", url: "https://honeypdf.com/", icon: "https://honeypdf.com/favicon.ico" },
				{ name: "一起读书", url: "https://www.17dushu.cn/", icon: "https://www.17dushu.cn/favicon.ico" },
				{ name: "飞库文学", url: "https://www.feiku6.com/", icon: "https://www.feiku6.com/favicon.ico" },
				{ name: "电子书搜索", url: "https://tstrs.me/search", icon: "https://tstrs.me/favicon.ico" },
				{ name: "Mobi图书", url: "https://mobitushu.cn/", icon: "https://mobitushu.cn/favicon.ico" },
				{ name: "BookPlus", url: "https://bookplusapp.top/", icon: "https://bookplusapp.top/favicon.ico" },
				{ name: "Kepub", url: "https://www.kepub.net/", icon: "https://www.kepub.net/favicon.ico" }
			]
		},
		{
			name: "实用工具",
			links: [
				{ name: "刘明野的工具箱", url: "https://tools.liumingye.cn/", icon: "https://tools.liumingye.cn/favicon.ico" },
				{ name: "在线工具", url: "https://tool.lu/", icon: "https://tool.lu/favicon.ico" },
				{ name: "ALL TO ALL", url: "https://www.alltoall.net/", icon: "https://www.alltoall.net/favicon.ico" },
				{ name: "临时邮箱", url: "https://mail.cx/zh/", icon: "https://mail.cx/favicon.ico" },
				{ name: "SM.MS", url: "https://smms.app/", icon: "https://smms.app/favicon.ico" },
				{ name: "UApi", url: "https://uapis.cn/", icon: "https://uapis.cn/favicon.ico" },
				{ name: "二维码生成", url: "https://cli.im/", icon: "https://cli.im/favicon.ico" },
				{ name: "Removebg", url: "https://www.remove.bg/", icon: "https://www.remove.bg/favicon.ico" },
				{ name: "MAS激活", url: "https://massgrave.dev/", icon: "https://massgrave.dev/favicon.ico" },
				{ name: "MinerU", url: "https://mineru.net/OpenSourceTools/Extractor", icon: "https://mineru.net/favicon.ico" },
				{ name: "Smallpdf", url: "https://smallpdf.com/cn", icon: "https://smallpdf.com/favicon.ico" },
				{ name: "马克配音", url: "https://ttsmaker.cn/", icon: "https://ttsmaker.cn/favicon.ico" },
				{ name: "图改改", url: "https://tugaigai.com/", icon: "https://tugaigai.com/favicon.ico" },
				{ name: "QwertyLearner", url: "https://qwerty.liumingye.cn/", icon: "https://qwerty.liumingye.cn/favicon.ico" },
				{ name: "Wormhole", url: "https://wormhole.app/", icon: "https://wormhole.app/favicon.ico" },
				{ name: "云鸽传送", url: "https://yunge.in/", icon: "https://yunge.in/favicon.ico" },
				{ name: "图片拼接", url: "https://kejiweixun.com/tools/merge-images", icon: "https://kejiweixun.com/favicon.ico" },
				{ name: "LookScanned", url: "https://lookscanned.io/scan", icon: "https://lookscanned.io/favicon.ico" },
				{ name: "音乐解锁", url: "https://unlock-music.liumingye.cn/", icon: "https://unlock-music.liumingye.cn/favicon.ico" }
			]
		},
		{
			name: "设计素材",
			links: [
				{ name: "Pexels", url: "https://www.pexels.com/", icon: "https://www.pexels.com/favicon.ico" },
				{ name: "Flaticon", url: "https://www.flaticon.com/", icon: "https://www.flaticon.com/favicon.ico" },
				{ name: "可画", url: "https://www.canva.cn/", icon: "https://www.canva.cn/favicon.ico" },
				{ name: "Color Hunt", url: "https://colorhunt.co/", icon: "https://colorhunt.co/favicon.ico" },
				{ name: "TinyPNG", url: "https://tinify.cn/", icon: "https://tinify.cn/favicon.ico" },
				{ name: "字体天下", url: "https://www.fonts.net.cn/", icon: "https://www.fonts.net.cn/favicon.ico" },
				{ name: "彼岸桌面", url: "https://www.netbian.com/", icon: "https://www.netbian.com/favicon.ico" }
			]
		},
		{
			name: "摸鱼娱乐",
			links: [
				{ name: "神奇海螺试验场", url: "https://lab.magiconch.com/", icon: "https://lab.magiconch.com/favicon.ico" },
				{ name: "Life Restart", url: "https://liferestart.syaro.io/public/", icon: "https://liferestart.syaro.io/favicon.ico" },
				{ name: "FakeUpdate", url: "https://fakeupdate.net/", icon: "https://fakeupdate.net/favicon.ico" },
				{ name: "今日热榜", url: "https://tophub.today/", icon: "https://tophub.today/favicon.ico" },
				{ name: "Freegame", url: "https://freegame.tw/", icon: "https://freegame.tw/favicon.ico" },
				{ name: "在线DOS游戏", url: "https://dos.zczc.cz/", icon: "https://dos.zczc.cz/favicon.ico" },
				{ name: "老游戏在线玩", url: "https://zaixianwan.app/", icon: "https://zaixianwan.app/favicon.ico" },
				{ name: "CrazyGames", url: "https://www.crazygames.com/", icon: "https://www.crazygames.com/favicon.ico" },
				{ name: "Poki小游戏", url: "https://poki.com/", icon: "https://poki.com/favicon.ico" },
				{ name: "合成大西瓜", url: "https://daxigua.pages.dev/", icon: "https://daxigua.pages.dev/favicon.ico" }
			]
		}
	],

	statement: ["Copyright © 2026 ZZJ"],
}

export default config
