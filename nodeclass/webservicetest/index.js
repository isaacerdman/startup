const http = require('http');
let person = {name:"ike",number:10};
const server = http.createServer(function (req, res) {
    console.log("Connected " + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(person));
    res.end();
});

server.listen(8080, () => {
    console.log(`Web service listening on port 8080`);
});