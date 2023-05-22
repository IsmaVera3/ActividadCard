const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
    nombre: String,
    Autor: String,
    Editorial: String,
    Isdn: String,
    Genero: String,
    Paginas: Number,
    precio: Number,
    año: Number,
});

module.exports = mongoose.model("Libros", libroSchema);