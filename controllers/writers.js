const express = require('express');
const router = express.Router();
const Writer = require('../models/writers.js');
const seed = require('../models/seed.js');

// SEED ROUTE
router.get('/writers/seed', (req, res) => {
    Writer.create(seed, (error, data) => {
        res.redirect('/writers')
    })
});

//CREATE ROUTE
router.get('/writers/new', (req, res) => {
    res.render('new.ejs')
});

router.post('/writers', (req, res) => {
    Writer.create(req.body, (error, createdWriter) => {
        res.redirect('/writers')
    })
}); 

// INDICES
router.get('/writers', (req, res) => {
    Writer.find({}, (error, allWriters) => {
        res.render('index.ejs', {
            writers: allWriters
        })
    })
});

router.get('/writers/index_black_writers', (req, res) => {
    Writer.find({ identity: 'Black' }, (error, blackWriters) => {
        res.render('index_black_writers.ejs', {
            writers: blackWriters
        })
    })
});

router.get('/writers/index_AAPI_writers', (req, res) => {
    Writer.find({ identity: 'Asian' },(error, asianWriters) => {
        res.render('index_AAPI_writers.ejs', {
            writers: asianWriters
        })
    })
});


router.get('/writers/index_indigenous_writers', (req, res) => {
    Writer.find({ identity: 'Indigenous'}, (error, indigenousWriters) => {
        res.render('index_indigenous_writers.ejs', {
            writers: indigenousWriters
        })
    })
});

router.get('/writers/index_latinx_writers', (req, res) => {
    Writer.find({identity: 'Latinx'}, (error, latinxWriters) => {
        res.render('index_latinx_writers.ejs', {
            writers: latinxWriters
        })
    })
});

router.get('/writers/index_menasa_writers', (req, res) => {
    Writer.find({identity: 'MENASA'}, (error, menasaWriters) => {
        res.render('index_menasa_writers.ejs', {
            writers: menasaWriters
        })
    })
});

// SHOW ROUTE
router.get('/writers/:id', (req, res) => {
    Writer.findById(req.params.id, (error, foundWriter) => {
        res.render('show.ejs', {
            writer: foundWriter
        })
    })
});

module.exports = router;