const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
module.exports = {
	lang: "zh-CN",
	title: "你好， VuePress ！",
	description: "这是我的第一个 VuePress 站点",
	themeConfig: {
		logo: "https://vuejs.org/images/logo.png",
		sidebar,
		navbar,
		displayAllHeaders: true,
		smoothScroll: true,
	},
	plugins: [],
};
