const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
const { path } = require("@vuepress/utils");

console.log(__dirname, "dirname");
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
	alias: {
		"@feComp": path.resolve(__dirname, "../fe/components"),
	},
	markdown: {
		code: {
			// lineNumbers: false,
		},
	},
	plugins: [
		[
			// https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html#配置项
			"@vuepress/register-components",
			{
				// componentsDir: path.resolve(__dirname, "../fe/"),
				components: {
					FeSample: path.resolve(__dirname, "../fe/components/Sample.vue"),
					FeFormCustomCheckbox: path.resolve(__dirname, "../fe/components/form/CustomCheckbox.vue"),
					FeDashMiddle: path.resolve(__dirname, "../fe/components/DashMiddle.vue"),
					FeVCenter: path.resolve(__dirname, "../fe/components/VCenter.vue"),
				},
			},
		],
	],
};
