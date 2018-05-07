const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env', 'stage-2', 'react']
				}
			}
		]
	},

	plugins: [new UglifyJSPlugin()],
	entry: 0,

	output: {
		filename: '[name].js',
		publicPath: "/public/",
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development'
};
