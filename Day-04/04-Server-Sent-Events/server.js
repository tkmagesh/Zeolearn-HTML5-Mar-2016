var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var staticResourceExtns = ['.html', '.js', '.css', '.ico', '.jpg'];

function isStatic(resource){
	return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
	req.url = req.url === '/' ? '/index.html' : req.url;
	req.url = url.parse(req.url);
	console.log(req.method + ' - ' + req.url.pathname);
	if (isStatic(req.url.pathname)){
		var resourcePath = path.join(__dirname, req.url.pathname);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourcePath).pipe(res);
	} else if (req.url.pathname === '/stream'){
		res.writeHead(200, {
			"connection" : "keep-alive", 
			"content-type" : "text/event-stream"
		});
		setInterval(function(){
			res.write('event: message\n');
			res.write('data: ' + new Date() + '\n\n');
		},3000);
		fs.watch(path.join(__dirname, './index.html'), function(){
			res.write('event: fileChange\n');
			res.write('data: ' + path.join(__dirname, './index.html') + 'changed at ' + new Date() + '\n\n');
		});
	}
});
server.listen(8080);
console.log('server listening on port 8080..!');