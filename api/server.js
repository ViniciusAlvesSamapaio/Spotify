const express = require('express');
const path = require('path');
const { createEngine } = require('express-react-views');
const axios = require('axios');

const server = express();
const port = process.env.PORT || 3001;

// Teoricamente todos os arquivos js chamados na pasta views serão rendenrizado.
server.set('views', path.resolve('../spotify/src/views'));
server.set('view engine', 'js');
server.engine('js', createEngine());


server.get('http://localhost:3001', (req, res) => {
    
});

server.listen(port, () => console.log(`Listening on port ${port}`));
