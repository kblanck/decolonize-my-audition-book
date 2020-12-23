const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const { response } = require('express');


require('dotenv').config()
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT || 3003
const MONGODB_URI = process.env.MONGODB_URI 

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method'))
const writersController = require('./controllers/writers.js');
app.use('/', writersController);

app.listen(PORT, () => {
    console.log('hi hi listening to u on port ', PORT)
})