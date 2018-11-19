var express = require('express');
var bodyParser = require("body-parser");
var app = express();
const xport = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/first', function (req, res) {
   res.send('Hello World');
})

app.put('/upload', function (req,res) {
    var temp = req.body.datavalue;
    res.send(temp);

    io.emit("mark");

    console.log(temp);
})

var server = app.listen(xport, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, xport)
})

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('close', () => console.log('Client disconnected'));
});