const secret=require('./secret');

module.exports = {
	'@vuepress/back-to-top': true,
	'@vssue/vuepress-plugin-vssue': {
		platform: 'github-v4',
		owner: '294169089l',
		repo: 'liang',
		clientId: secret.clientId,
		clientSecret: secret.clientSecret,
		autoCreateIssue: true
	},
	'@vuepress/google-analytics':
	{
		'ga': secret.ga
	}
};