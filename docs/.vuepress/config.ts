const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
const { path } = require("@vuepress/utils");

console.log(__dirname, "dirname");
module.exports = {
	lang: "zh-CN",
	title: "笔记@小有记",
	themeConfig: {
		logo: "/images/logo.png",
		sidebar,
		navbar,
		displayAllHeaders: true,
		smoothScroll: true,
	},
	alias: {
		"@feComp": path.resolve(__dirname, "../fe/components"),
	},
	markdown: {
		code: {
			// lineNumbers: false,
		},
	},
	plugins: [],
};
