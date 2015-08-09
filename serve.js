'use strict'

var http = require('http')
var url = require('url')
var send = require('send')

var httpServer = http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname,
      root = './dist'

  function error(err) {
    res.statusCode = err.status || 500;
    res.end(err.message);
  }

  function redirect() {
    res.statusCode = 301;
    res.setHeader('Location', req.url + '/');
    res.end('Redirecting to ' + req.url + '/');
  }

  send(req, path, { root: root })
    .on('error', error)
    .on('directory', redirect)
    .pipe(res)
})

httpServer.listen(4000)
