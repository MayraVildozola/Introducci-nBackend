var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response){
    console.log('request ', request.url);
    var filePath = '.' + request.url;
    if(filePath == './'){
        filePath = './index.html';
    }
    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mineTypes = {
        'http': 'text/html',
        
    }
}