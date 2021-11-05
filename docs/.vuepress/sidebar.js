module.exports = {
	"/web/": [
		"/web/readme.md",
		{
			text: "核心",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/web/core/best-practice.md", "/web/core/favicon.md", "/web/core/code-review/js-01.md"],
		},
		{
			text: "Npm & Yarn",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/web/npm/npm-package.md",
				"/web/npm/faq.md",
				"/web/npm/npm-mirror.md",
				"/web/npm/yarn-mirror.md",
			],
		},
		{
			text: "Vue 3 + Vite",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/web/vue/readme.md", "/web/vue/faq.md"],
		},
		{
			text: "React",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/web/react/faq.md"],
		},
		{
			text: "三方 & 服务",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/web/vendor/intro-jsdoc.md",
				"/web/vendor/axios-interceptors.md",
				"/web/vendor/sentry-install-with-sourcemap.md",
				"/web/vendor/api-cloud.md",
			],
		},
		"/web/faq.md",
	],
	"/develop/": [
		"/develop/readme.md",
		{
			text: "Git",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/develop/git/faq.md",
				"/develop/git/intro-git-flow.md",
				"/develop/git/success-git-branch-model.md",
			],
		},
		{
			text: "Http",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/develop/http/status.md", "/develop/http/same-site.md"],
		},
		{
			text: "标准化(试行)",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/develop/standard/readme.md",
				"/develop/standard/flow.md",
				"/develop/standard/design.md",
				"/develop/standard/develop.md",
				"/develop/standard/client.md",
				"/develop/standard/app.md",
				"/develop/standard/web.md",
				"/develop/standard/ops.md",
				"/develop/standard/qa.md",
				"/develop/standard/testing.md",
			],
		},
		{
			text: "IDE",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/develop/ide/jetbrains-plugins.md",
				"/develop/ide/vscode-plugins.md",
				"/develop/ide/phpstorm-tips.md",
				"/develop/ide/webstorm-auto-complete.md",
			],
		},
	],
	"/php/": [
		"/php/readme.md",
		{
			text: "核心",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/php/core/1_intro.md", "/php/core/faq.md", "/php/core/upgrade-7.4.md"],
		},
		{
			text: "Laravel",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/php/laravel/upgrade-5.5-6.0.md", "/php/laravel/upgrade-6.0-6.x.md"],
		},
		{
			text: "三方&服务",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/php/vendor/fzaninotto-faker-readme.md"],
		},
	],
	"/mysql/": [
		"/mysql/readme.md",
		{
			text: "Mysql Cookbook",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/mysql/note/1_mysql-client.md",
				"/mysql/note/2_query.md",
				"/mysql/note/3_table.md",
				"/mysql/note/4_string.md",
				"/mysql/note/5_datetime.md",
				"/mysql/note/6_group.md",
				"/mysql/note/7_export.md",
			],
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
				"/os/centos/install-redis.md",
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
			children: ["/os/linux/faq.md", "/os/linux/ssh-at-linux.md", "/os/linux/logrotate.md"],
		},
		{
			text: "Ubuntu",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/os/ubuntu/lnmp-at-ubuntu.md"],
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
				"/nginx/guide/openresty.md",
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
				"/nginx/example/readme.md",
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
				"/nginx/example/split-log.md",
				"/nginx/example/static-expired.md",
				"/nginx/example/301-permanent.md",
				"/nginx/example/413-entity-too-large.md",
			],
		},
		"/nginx/faq.md",
	],
	"/other/": [
		{
			text: "其他",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/other/python/mirror.md",
				"/other/set-proxy.md",
				"/other/qq-auto-login.md",
				"/other/mongo-db/install-at-mac.md",
			],
		},
	],
};
