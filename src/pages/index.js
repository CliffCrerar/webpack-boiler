
module.exports = {
	pages: [
		{ page: 1, title: require('../../package.json').name + ' ' + require('../../package.json').version }
	],
	meta: {
		charset: 'UTF-8',
		viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
		'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
		// Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
		// Which equals to the following http header: `Content-Security-Policy: default-src https:`
		//'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
		// Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
		// Which equals to the following http header: `set-cookie: value; expires=date; path=url`
	},
	minify: process.env.NODE_ENV === 'production'
}