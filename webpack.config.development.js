const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack =require('webpack');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin({
			// Options...
		})
	],
	devServer: {
		contentBase: './dist',
	},
});