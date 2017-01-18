Steps to run React app with ES6 & babel using webpack:


1) Create your application folder & run ‘cd’ to that folder.

2) Create package.json file:
   npm init

3) Install required libraries:
   npm install webpack babel-core babel-loader babel-preset-es2015 babel-preset-react react react-dom webpack-dev-server –save

4) Write components/app.js, client.js & index.html files.

5) Configure ES6 loader into webpack.config.js.
  module.exports = {
    entry: ["./client.js"],
    output: {    filename: "bundle.js"  },
    module: {
        loaders: [ {     test: /\.js$/,       exclude: /node_modules/,
			                loader: 'babel-loader',
			                query: {
			                    presets: ['react', 'es2015']
			                }
            		}
        	        ],
	    	},
    watch: true
  }

6) Set webpack & webpack-dev-server path:
   set PATH=%PATH%;./node_modules/.bin

7) Build bundle.js:
   webpack --config webpack.config.js

8) Run webpack dev server:
   webpack-dev-server –inline

9) Finally run the URL:
   http://localhost:3000
