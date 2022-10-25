const headConf=require('./config/headConf');
const plugConf=require('./config/plugConf');
const navConf=require('./config/navConf');

module.exports = {
	base: '/liang/',
	title: '冠希の博客',
	description: '冠希の博客1.0',
	head: headConf,
	plugins: plugConf,
	themeConfig: {
		logo: '/favicon.ico',
		lastUpdated: '更新时间',
		nav: navConf
	}
};