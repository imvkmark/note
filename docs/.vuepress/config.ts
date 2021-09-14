const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");

console.log(__dirname, "dirname");
module.exports = {
	lang: "zh-CN",
	title: "笔记@小有记",
	base: "/note",
	themeConfig: {
		logo: "/images/logo.png",
		sidebar,
		navbar,
		displayAllHeaders: true,
		smoothScroll: true,
	},
	markdown: {
		code: {
			// lineNumbers: false,
		},
	},
	plugins: [
		[
			"@vuepress/docsearch",
			{
				apiKey: "9eca016e40335ee789f9a73253c13be1",
				indexName: "note",
				appId: "LD89A1JN8Y",
				locales: {
					"/": {
						placeholder: "Search",
					},
				},
			},
		],
	],
};
