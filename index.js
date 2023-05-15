const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("mi-vista");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});