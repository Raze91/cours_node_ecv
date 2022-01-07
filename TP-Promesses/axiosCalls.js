const axios = require("axios");

let baseUrl = "https://swapi.py4e.com/api";

function makeCalls() {
    return axios.all([
        axios.get(`${baseUrl}/planets`),
        axios.get(`${baseUrl}/starships/10`),
        axios.get(`${baseUrl}/planets/8`),
        axios.get(`${baseUrl}/people?search=Darth%20Vader`),
        axios.get(`${baseUrl}/people/13?format=wookiee`),
        axios.get(`${baseUrl}/people?search=r2`),]);
}

async function execute() {
    try {
        const promise = await makeCalls();
        console.log(promise)
    } catch (e) {
        console.log(e);
    }
};


execute();