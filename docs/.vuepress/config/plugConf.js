const secret=require('./secret');
module.exports = {
	'@vuepress/back-to-top': true,
	'@vssue/vuepress-plugin-vssue': {
		platform: 'github-v4',
		owner: 'liangone',
		repo: 'liang',
		clientId: secret.clientId,
		clientSecret: secret.clientSecret,
		autoCreateIssue: true
	},
	'@vuepress/google-analytics':
	{
		'ga': secret.ga
	},
	'@vuepress/medium-zoom': {
		selector: 'img',
	},
	"vuepress-plugin-auto-sidebar":{}
};