const express = require('express');
const path = require('path');
const { createEngine } = require('express-react-views');

const server = express();
const port = process.env.PORT || 3000;

// server.use(express.static(path.resolve('../spotify/src/components')));


// Teoricamente todos os arquivos js chamados na pasta views serão rendenrizado.
server.set('views', path.resolve('../spotify/src/views'));
server.set('view engine', 'js'); 
server.engine('js', createEngine());

server.get('/', (req, res) => {
    res.render('Home');
});

server.get('/api', (req, res) => {
    res.send({express: 'Hello From Express'});
});

server.listen(port, () => console.log(`Listening on port ${port}`));
