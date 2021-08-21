const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
module.exports = {
	lang: "zh-CN",
	title: "学习笔记@小有记",
	themeConfig: {
		logo: "/images/logo.png",
		sidebar,
		navbar,
		displayAllHeaders: true,
		smoothScroll: true,
	},
	plugins: [],
};
