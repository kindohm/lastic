const express = require('express');
const http = require('http');
const app = express();

app.use('/', express.static('browser'));
app.use('/node_modules', express.static('node_modules'));

const server = http.createServer(app);

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});
