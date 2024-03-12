const express = require('express');
const app = express();

function GerarDados(req, res) {
    const temperatura = Math.round(Math.random() * 100);
    const watt = Math.round(Math.random() * 100);
    const pressao = Math.round(Math.random() * 100);
    
    res.send({
        temperatura: temperatura,
        watt: watt,
        pressao: pressao
    });
}

app.get('/dados', GerarDados);

app.listen(3333, () => console.log('executando'));