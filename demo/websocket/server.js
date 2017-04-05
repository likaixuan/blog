/* 
 * @author 李凯旋
 */
let http = require('http');
let fs = require('fs');
let path = require('path');
let mime = require('mime');
let chatServer = require('./lib/chat_server');

let cache = {};

let server = http.createServer(function (req,res) {
	let filePath = false;
	if(req.url === '/') {
		filePath ='public/index.html';
	} else {
		filePath = 'public'+req.url;
	}
	var absPath = './' + filePath;
	serverStatic(res,cache,absPath);
});
chatServer.listen(server);
// 监听来自页面的
请求
server.listen(3000,function() {
	console.log("server listening on port 3000");
})

//404页面
function send404 (res) {
	res.writeHead(404,{
		'Content-Type':'text/plain'
	});
	res.write('Error 404:页面找不到');
	res.end();
}

//发送文件
function sendFile (res,filePath,fileContents) {
	res.writeHead(
		200,{
			'Content-Type':mime.lookup(path.basename(filePath))
		}
	);
	res.end(fileContents);
}

//读取文件
function serverStatic (res,cache,absPath) {
//	if (cache[absPath]) {
//		//存在缓存 从缓存中读取
//		sendFile(res,absPath,cache[absPath]);
//	} else {
		fs.exists(absPath, function (exists) {
			if(exists) {
				fs.readFile(absPath,function(err,data) {
					if(err) {
						
						send404(res);
					} else {
						cache[absPath] = data;
						sendFile(res,absPath,data);
					}
				});
			} else {
				send404(res);
			}
		})
	//}
}
