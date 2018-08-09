var http  = require('http'); 
var dt = require('./myfirstModule.js');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write('Displaying The today Date ' + dt.myDateModule()+'\n');
    res.end('Hello World!');
}).listen(8081);