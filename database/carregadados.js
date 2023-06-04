require("./mongodb");
const mongoose = require("mongoose");
const movieModel = require("../models/userModel");
const movies = require("./movies.json");

async function carregarDados() {
    try {
        await movieModel.deleteMany({});
        for (const movie of movies) {
            await movieModel.create(movie);
        }
        console.log("Carga de usuários feita!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();