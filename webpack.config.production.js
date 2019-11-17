const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
module.exports = merge(common, {
	mode: 'production',
	plugins: [new CompressionPlugin(), new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// all options are optional
		filename: '[name].css',
		chunkFilename: '[id].css',
		ignoreOrder: false // Enable to remove warnings about conflicting order
	})],
	module: {
		rules: [
			{
				test: /\.(c|sa|sc)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: (resourcePath, context) => {
								// publicPath is the relative path of the resource to the context
								// e.g. for ./css/admin/main.css the publicPath will be ../../
								// while for ./css/main.css the publicPath will be ../
								return path.relative(path.dirname(resourcePath), context) + '/';
							}
						}
					},
					'css-loader', 'sass-loader'
				]
			}
		]
	}

});