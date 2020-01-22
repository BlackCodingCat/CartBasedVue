module.exports = {
    publicPath: './',

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': []
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: false
      }
    },

	configureWebpack: {
		devServer: {
			before(app){
				// 模拟后台服务器express
				app.get('/api/login', (req, res) => {
					const {username, pwd} = req.query;
					if(username === "BlackCodingCat" && pwd === "sjq145866"){
						// 登录成功
						res.json({code: 1, token: 'jilei', message: '登录成功'});
					}else{
						// 登录失败
						res.status(401).json({code: 0, message: '用户名或密码错误'});
					}
				})
			}
		}
	}
}
