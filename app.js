const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(port, () => {3000});
//rota login

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    res.send(`Username: ${username} Password: ${password}`);
});