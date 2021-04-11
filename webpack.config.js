const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
		  title: 'Dev',
		  template: './src/index.html'
		}),
	],
	module: {
		rules: [
			{ test: /\.css$/i, use: ['style-loader', 'css-loader'], },
			{ test: /\.html$/i, loader: 'html-loader', },
		],
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src/'),
			'@lib': path.resolve(__dirname, 'lib/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@layouts': path.resolve(__dirname, 'src/lsyouts/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
		},
	},
};