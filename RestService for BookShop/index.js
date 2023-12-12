const express = require('express');
const cors = require('./middlewares/cors');
//const cors = require('cors');
const mongoose = require('mongoose');
const dataController = require('./controllers/dataController');
const trimBody = require('./middlewares/trimBody');
const cookieParser = require('cookie-parser');
const cartController = require('./controllers/cartController');

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/AngularDefance';

start();
async function start() {
    await mongoose.connect(CONNECTION_STRING);
    console.log('Database connected :)');

    const app = express();
    app.use(express.json());
    app.use(cookieParser('AngularProject'));
    app.use(cors());
    // app.use(cors());
    app.use(trimBody());

    app.use('/AngularDef/data', dataController);
    app.use('/AngularDef/cart', cartController);


    app.get('*', (req, res) => {
        res.status(400).json({ message: 'Invalid Url' });
    })



    app.listen(3000, () => console.log('Rest server is listening on port 3000...'))
}