module.exports = {
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
			text: "ApiCloud",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/javascript/api-cloud/faq.md"],
		},
		{
			text: "Vendor",
			collapsable: true,
			sidebarDepth: 2,
			children: ["/javascript/x_vendor/axios-interceptors.md"],
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
		{
			text: "CentOS",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/os/centos/install-php-on-centos.md",
				"/os/centos/install-redis5.md",
				"/os/centos/modify-host.md",
				"/os/centos/system-install.md",
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
				"/os/linux/git-ssh-auto-pull.md",
				"/os/linux/logrotate.md",
				"/os/linux/ssh-login-slow-at-pledge.md",
				"/os/linux/ssh-login.md",
				"/os/linux/ssh-port.md",
			],
		},
		{
			text: "Mac",
			collapsable: true,
			sidebarDepth: 2,
			children: [
				"/os/mac/install-brew-slow.md",
				"/os/mac/install-php-env.md",
				"/os/mac/readme.md",
				"/os/mac/upgrade-bash.md",
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
