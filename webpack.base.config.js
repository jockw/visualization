const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		app: './src/main.js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
	externals: {
		'element-ui': 'element-ui',
		'vue': 'Vue',
		'vue-router':'VueRouter',
		"echarts": "window.echarts",
		"iview": "iview"
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src')]
			},
			{
				test: /\.css$/,
				oneOf: [
					// 这里匹配 `<style module>`
					{
					  resourceQuery: /module/,
					  use: [
						"style-loader",
					//	'vue-style-loader',
						{
						  loader: 'css-loader',
						  options: {
							modules: {
								localIdentName: '[local]_[hash:base64:8]'
							},
						  }
						}
					  ]
					},
					// 这里匹配普通的 `<style>` 或 `<style scoped>`
					{
					  use: [
						"style-loader",
					//	'vue-style-loader',
						'css-loader'
					  ]
					}
				  ],
			  },
			{
				test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff)$/,
				use: ['file-loader?name=[hash:base64:7].[ext]'],
			},
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: "vendor",
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	},
	plugins: [
		new VueLoaderPlugin(),
	],
}
