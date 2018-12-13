const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, '../index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components$: path.resolve(__dirname, '../app/components'),
			assets$: path.resolve(__dirname, '../assets'),
			codemirror: path.resolve(__dirname, '../node_modules/codemirror')
		}
	},

	module: {
		rules: [
			{
				test: /\.(png|jpg|gif|svg|ico)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},

			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			favicon: path.resolve(__dirname, '../favicon.ico')
		}),
		new CleanTerminalPlugin()
	]
};
