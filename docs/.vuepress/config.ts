const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");

console.log(__dirname, "dirname");
module.exports = {
	lang: "zh-CN",
	title: "Note @ Wulicode",
	base: "/note/",
	home: "https://wulicode.com/",
	themeConfig: {
		logo: "/images/logo.png",
		sidebar,
		navbar,
		repo: "https://github.com/imvkmark/note",
		displayAllHeaders: true,
		smoothScroll: true,
		docsBranch: "master",
		docsDir: "docs",
	},
	markdown: {
		code: {
			// lineNumbers: false,
		},
	},
	plugins: [
		["@vuepress/toc"],
	],
};
