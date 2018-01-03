var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static('public'));

app.get('/',function(request,response){
    //解析请求，包括文件名
    var pathname = request.path;

    //输出请求的文件名
    console.log('Request for ' + pathname + ' received');

    //从文件系统中读取请求的文件内容
    //fs.readFile(pathname.substr(1),function(err,data){
    fs.readFile('index.html',function(err,data){
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

var server = app.listen(80,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s',host,port);

});
