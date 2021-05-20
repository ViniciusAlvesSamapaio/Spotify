const express = require('express');

const server = express();
const port = process.env.PORT || 3000;

server.set('views', )

server.get('/', (req, res) => {
    
});

server.get('/api', (req, res) => {
    res.send({express: 'Hello From Express'});
});


server.listen(port, () => console.log(`Listening on port ${port}`));