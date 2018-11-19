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

    wss.clients.forEach((client) => {
        client.send("mark");
      });

    console.log(temp);
})

var server = app.listen(xport, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, xport)
})

// Creation of a Websocket server
const socketServer = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  const wss = new SocketServer({ socketServer });

  wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
  });