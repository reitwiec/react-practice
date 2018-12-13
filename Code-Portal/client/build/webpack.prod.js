const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist')
	},

	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				parallel: true,
				uglifyOptions: {
					compress: {
						drop_console: true
					},
					output: {
						comments: false
					}
				}
			})
		]
	}
});
