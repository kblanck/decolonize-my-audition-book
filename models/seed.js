const mongoose = require('mongoose');

const seed = [
    {
        name: 'Michael R. Jackson',
        identity: 'Black',
        knownFor: 'A Strange Loop',
        // prodYear: 2019,
        youTube: 'https://www.youtube.com/watch?v=ZDLCvVBUBTM',
        social: 'test'
    },
    {
        name: 'Adam Gwon',
        identity: 'Asian',
        knownFor: 'Ordinary Days',
        // prodYear: 2019,
        youTube: 'https://www.youtube.com/watch?v=CjGyMlYtzak',
        social: 'test'
    },
    {
        name: 'Benjamin Velez',
        identity: 'Latinx',
        knownFor: 'Kiss My Aztec',
        youTube: 'https://www.youtube.com/watch?list=PLpTuf06-V9xtjR7__kz2p8q-1YRSf0Qlq&v=40bUwx0yqjk',
        social: 'test'
    },
    {
        name: 'Shaun Taylor-Corbett',
        identity: 'Native American',
        knownFor: 'Distant Thunder',
        youTube: 'https://www.youtube.com/watch?v=AWFb2q998q8',
        social: 'test'
    },
    {
        name: 'The Lazours',
        identity: 'MENASA',
        knownFor: 'We Live in Cairo',
        youTube: 'https://www.youtube.com/watch?v=QQSgowAgWto',
        social: 'test'
    }
];

module.exports = seed;