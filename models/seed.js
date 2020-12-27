const mongoose = require('mongoose');

const seed = [
    {
        firstName: 'Michael',
        middle: 'R.',
        lastName: 'Jackson',
        identity: 'Black',
        addlIdentity: '',
        knownFor: 'A Strange Loop',
        notableAwards: '2020 Pulitzer Prize for Drama',
        youTube: 'https://www.youtube.com/watch?v=ZDLCvVBUBTM',
        socialType: 'Twitter',
        socialHandle: '@TheLivingMJ'
    },
    {
        firstName: 'Adam',
        middle: '',
        lastName: 'Gwon',
        identity: 'Asian',
        addlIdentity: 'Chinese',
        knownFor: 'Ordinary Days',
        notableAwards: 'The Kleban Award, The Fred Ebb Award, The Richard Rodgers Award',
        youTube: 'https://www.youtube.com/watch?v=CjGyMlYtzak',
        socialType: 'Twitter',
        socialHandle: '@AdamGwon'
    },
    {
        firstName: 'Benjamin',
        middle: '',
        lastName: 'Velez',
        identity: 'Latinx',
        addlIdentity: '',
        knownFor: 'Kiss My Aztec',
        notableAwards: 'The 2019 Fred Ebb Award, the 2020 Jonathan Larson Grant',
        youTube: 'https://www.youtube.com/watch?v=mt0Pi_jXa9M',
        socialType: 'Instagram',
        socialHandle: '@benjaminvelezmusic',
    },
    {
        firstName: 'Shaun',
        middle: '',
        lastName: 'Taylor-Corbett',
        identity: 'Indigenous',
        addlIdentity: '',
        knownFor: 'Distant Thunder',
        notableAwards: '',
        youTube: 'https://www.youtube.com/watch?v=AWFb2q998q8',
        socialType: 'Instagram',
        socialHandle: '@shauntc37'
    },
    {
        firstName: 'The Lazours',
        middle: '',
        lastName: '',
        identity: 'MENASA',
        addlIdentity: 'Lebanese',
        knownFor: 'We Live in Cairo',
        notableAwards: '',
        youTube: 'https://www.youtube.com/watch?v=QQSgowAgWto',
        socialType: 'Instagram',
        socialHandle: '@sfrereslazour'
    }
];

// const asianWriters = seed.filter((writer) => {
//     if (writer.identity === 'Asian') {
//         return writer
//     }
// });

// console.log(asianWriters);

module.exports = seed;
// module.exports = asianWriters;