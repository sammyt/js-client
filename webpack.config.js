const path = require('path')

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'dist/goshawkdb.browser.js',
		libraryTarget: "umd",
		library: "goshawkdb"
	},
	externals: {
		'ws': 'WebSocket'
	},
	devtool: "cheap-eval-source-map"
}