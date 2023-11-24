'use strict';
const path = require( 'path' );

module.exports = ( env, argv ) => [
	{
		entry: path.resolve( __dirname, 'src', 'index.js' ),
		devtool: ( argv.mode === 'development' ) ? 'inline-source-map' : false,
		output: {
			path: path.resolve( __dirname, 'build' ),
			clean: true
		},
		devServer: {
			hot: true,
			port: 8000,
			allowedHosts: 'auto',
			static: path.resolve( __dirname, 'static' ),
			watchFiles: 'src/**/*',
			client: { progress: true },
			devMiddleware: { writeToDisk: true }
		}
	}
];