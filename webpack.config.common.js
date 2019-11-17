const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const makePages = function(){
	const {pages,meta,minify} = require('./src/pages');
	return pages.map(p=>new HtmlWebpackPlugin({
		title: p.title,
		meta,
		minify
	}))
}

module.exports = {
	entry: {
		app: './src/index.js',
	},
	plugins: [
		// new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: require('./package.json').name,
		}),
		new ManifestPlugin()

	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{ test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, // file loader
			{ test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }, // font loader
			{ test: /\.(csv|tsv)$/, use: ['csv-loader'] }, // csv loader
			{ test: /\.xml$/, use: ['xml-loader'] }, // xml loader
			{
				test: /\.(c|sa|sc)ss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass'),
						},
					},
				],
			},
		]
	}
};