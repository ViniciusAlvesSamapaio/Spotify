const db = require('../server/db.json');
const bodyParser = require('body-parser');
const express = require('express');

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.post('/inscreva-se', (req, res) => {
    const {nome} = req.body;
    const {email} = req.body;
    const {senha} = req.body;

    const name = nome;
    const password = senha;

    res.render(
        server.get('/', (req, res) => {
            res.JSON(db.Users = {name, email, password});
        })
    );
});

server.listen(process.env.PORT || 3000, function () {
    console.log('is running port ' + process.env.PORT || 3000);
});