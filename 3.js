const http = require("http");

const server = http.createServer((req, res) => {

    const response = {
        "firstname": "Sami",
        "lastname": "Hattab",
        "birthdate": "17/08/1999",
        "color": "blue"
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(response));
});

server.listen(3000, () => console.log(`Le serveur tourne sur http://localhost:3000`));