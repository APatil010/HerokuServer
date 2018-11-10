var express = require('express');
var app = express();
const xport = process.env.PORT || 5000

app.get('/first', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(xport, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, xport)
})