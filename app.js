const express = require('express');
const app = express();
const port = 3000;
const User = require("./models/Users");

app.get("/", async (req, res) => {
    res.send("Pagina Inicial");
});

app.post("/cadastro", async (req, res) => {
    res.send("Cadastro");
});




app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});