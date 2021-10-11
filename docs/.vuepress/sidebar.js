module.exports = {
	"/develop/": [
		{
			text: "Mysql",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/develop/git/qa-quick.md",
				"/develop/git/intro-git-flow.md",
				"/develop/git/success-git-branch-model.md",
			],
		},
	],
	"/mysql/": [
		{
			text: "Mysql",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/mysql/1_mysql-client.md",
				"/mysql/2_query.md",
				"/mysql/3_table.md",
				"/mysql/4_string.md",
				"/mysql/5_datetime.md",
				"/mysql/6_group.md",
				"/mysql/7_export.md",
			],
		},
	],
	"/javascript/": [
		"/javascript/readme.md",
		{
			text: "Vue 3 + Vite",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/javascript/vue/readme.md"],
		},
		{
			text: "Npm",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/javascript/npm/npm-package.md", "/javascript/npm/faq.md"],
		},
		{
			text: "React",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/javascript/react/faq.md"],
		},
		{
			text: "Vendor",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/javascript/x_vendor/axios-interceptors.md", "/javascript/x_vendor/api-cloud.md"],
		},
	],
	"/ops/": [
		{
			text: "运维",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/ops/sentry/install-at-centos.md"],
		},
	],

	"/os/": [
		"/os/readme.md",
		{
			text: "CentOS",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/os/centos/system-install.md",
				"/os/centos/lnmp-at-centos.md",
				"/os/centos/install-redis5.md",
				"/os/centos/modify-host.md",
				"/os/centos/upgrade-curl.md",
				"/os/centos/upgrade-supervisor.md",
				"/os/centos/aliyun-mount-disk.md",
			],
		},
		{
			text: "Linux",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/os/linux/faq.md",
				"/os/linux/ssh-at-linux.md",
				"/os/linux/logrotate.md"
			],
		},
		{
			text: "Mac",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/os/mac/readme.md",
				"/os/mac/brew-at-mac.md",
				"/os/mac/brew-install-slow.md",
				"/os/mac/lnmp-at-mac.md",
				"/os/mac/zsh-at-mac.md",
				"/os/mac/bash-upgrade.md",
			],
		},
	],

	"/nginx/": [
		"/nginx/readme.md",
		{
			text: "入门",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/nginx/guide/readme.md",
				"/nginx/guide/dir.md",
				"/nginx/guide/error.md",
				"/nginx/guide/linux-install.md",
				"/nginx/guide/mac-compile.md",
				"/nginx/guide/nginx-configure-descriptions.md",
			],
		},
		{
			text: "变量",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/nginx/variable/client.md",
				"/nginx/variable/readme.md",
				"/nginx/variable/server.md",
				"/nginx/variable/url.md",
			],
		},
		{
			text: "示例",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/nginx/example/add_header.md",
				"/nginx/example/autoindex.md",
				"/nginx/example/cors.md",
				"/nginx/example/domain.md",
				"/nginx/example/echo.md",
				"/nginx/example/error-page.md",
				"/nginx/example/expires.md",
				"/nginx/example/http-basic-auth.md",
				"/nginx/example/http-concat.md",
				"/nginx/example/https.md",
				"/nginx/example/image-valid.md",
				"/nginx/example/location.md",
				"/nginx/example/nodejs-proxy.md",
				"/nginx/example/proxy_pass.md",
				"/nginx/example/README.md",
				"/nginx/example/split-log.md",
				"/nginx/example/www-permanent.md",
			],
		},
	],
	"/other/": [
		{
			text: "其他",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/other/python/mirror.md"],
		},
	],
};
