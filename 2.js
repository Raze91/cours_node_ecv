const http = require("http");

const server = http.createServer((req, res) => {

    const response = {
        "message": "Hello World !",
        "status": 200
    }
    
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(response));
});

server.listen(3000, () => console.log(`Le serveur tourne sur http://localhost:3000`));