module.exports = {
	base:'/liang/',
	title: '冠希の博客',
	description: '冠希の博客1.0',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'author', content: '冠希' }],
		['meta', { name: 'keywords', content: 'vuepress,个人博客,冠希-个人博客,面试题,计算机,前端' }]
	],
	plugins: [
		[
			'@vuepress/last-updated'
		],
	],
	themeConfig: {
		logo: '/assets/img/hero.png',
		lastUpdated: '更新时间',
		// 导航栏。
		nav: [
			{ text: '首页', link: '/' },
			{ text: '前端', link: '/web/' },
			{ text: '面试', link: '/interview/' },
			{ text: '算法', link: '/arithmetic/' },
			{ text: '数据结构', link: '/dataStructure/' },
			{ text: 'GitHub', link: 'https://github.com/294169089l/liang' },
		]
	}
}