module.exports = {
	"/shell/": [
		{
			text: "Shell 学习笔记",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/shell/1_intro.md",
				{
					text: "语法结构",
					link: "/shell/2_ref/1_syntax.md",
					collapsable: false,
					sidebarDepth: 1,
					children: [
						"/shell/2_ref/1_syntax.md",
						"/shell/2_ref/2_types_array.md",
						"/shell/2_ref/2_types_string.md",
						"/shell/2_ref/3_variables.md",
						"/shell/2_ref/4_operator.md",
						"/shell/2_ref/5_control.md",
						"/shell/2_ref/6_function.md",
					],
				},
				"/shell/3_command.md",
			],
		},
	],
};
