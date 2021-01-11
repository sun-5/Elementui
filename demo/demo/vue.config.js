module.exports = {
    devServer:{
        port:6000,
        open:true,
        proxy: { // 配置跨域
            '/api': {
                target: 'http://task.com/api/',	//接口域名
                ws: true,	//是否代理websockets
                changOrigin: true,	//是否跨域
                pathRewrite: {		//重置路径
                    '^/api': ''
                }
            }
        },
    }

}