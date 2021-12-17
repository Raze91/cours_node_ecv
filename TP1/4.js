const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const message = url.parse(req.url, true).query.message;

    res.end(message);
});

server.listen(3000, () => console.log(`Le serveur tourne sur http://localhost:3000`));