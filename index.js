const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Libro = require("./libros");
const port = 3000;

mongoose.connect(
    "mongodb+srv://isma:ismapiratavera...@cluster0.zcaiqkt.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const bodyParser = require("body-parser");
const { name } = require("ejs");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("mi-vista");
});

app.post("/", (req, res) => {
    const nombre = req.body.nombre;
    const Autor = req.body.Autor;
    const Editorial = req.body.Editorial;
    const Isdn = req.body.Isdn;
    const Genero = req.body.Genero;
    const Paginas = req.body.Paginas;
    const Precio = req.body.Precio;
    const año = req.body.año;
});

const libros = new Libros({
    nombre: nombre,
    Autor: Autor,
    Editorial: Editorial,
    Isdn: Isdn,
    Genero: Genero,
    Paginas: Paginas,
    precio: precio,
    año: año,
});

libros.save();
console.log(libros);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

console.log(nombre,Autor,Editorial,Isdn,Genero,Paginas,precio,año);