const express = require('express');
const app = express();

app.get('/', (req, res) =>
    res.send('Aplicacion node test')
);

app.listen('3000');
console.log('Server on post 3000');
