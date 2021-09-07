import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// Connection mongoose
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});

// body-parser pour effectuer les transactions avec mongoDB
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`Serveur node et express sur PORT: ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`votre serveur est sur le PORT: ${PORT}`)
);
