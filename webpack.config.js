const path = require('path')

module.exports = {
	entry: {
		main: './main.js',
	},
	mode: 'development',
	output: {
		// filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	context: path.resolve(__dirname, '.'),
	target: 'node',
}
