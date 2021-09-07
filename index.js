import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) =>
    res.send(`Serveur node et express sur le port: ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Le serveur sur le port: ${PORT}`)
);