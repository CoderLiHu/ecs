var express = require('express');
var Webpack = require('webpack');
var WebpackDevMiddleWare = require('webpack-dev-middleware');
var config = require('./webpack.config');
var fs = require('fs');
var WebpackHotMiddleware = require('webpack-hot-middleware');

var compiler = Webpack(config);
var app = express();
//app.use(express.static('public'));
app.use(WebpackDevMiddleWare(compiler,{
    publicPath:'/',
    stats:{color:true},
    lazy:false,
}));
app.use(WebpackHotMiddleware(compiler));

app.get('/',function(request,response){
    //解析请求，包括文件名
    var pathname = request.path;

    //输出请求的文件名
    console.log('Request for ' + pathname + ' received');

    //从文件系统中读取请求的文件内容
    //fs.readFile(pathname.substr(1),function(err,data){
    fs.readFile('public/index.html',function(err,data){
        if(err){
            console.log(err);
            //response.set(404,{'Content-Type':'text/html'});
        } else{
            //response.set(200,{'Content-Type':'text/html'});
            response.send(data.toString());
        };
        response.end();
    });
});

var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s',host,port);

});
