const express = require('express');
const router = express.Router();
const Writer = require('../models/writers.js');
const seed = require('../models/seed.js');

//SEED ROUTE
// router.get('/writers/seed', (req, res) => {
//     Writer.create(seed, (error, data) => {
//         res.redirect('/writers')
//     })
// });

//CREATE ROUTE
router.get('/writers/new', (req, res) => {
    res.render('new.ejs')
});

router.post('/writers', (req, res) => {
    Writer.create(req.body, (error, createdWriter) => {
        res.redirect('/writers')
    })
}); 

// INDEX
router.get('/writers', (req, res) => {
    Writer.find({}, (error, allWriters) => {
        res.render('index.ejs', {
            writers: allWriters
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