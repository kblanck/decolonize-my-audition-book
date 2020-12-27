const mongoose = require('mongoose');

const writerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middle: { type: String, required: false } ,
    lastName: { type: String, required: false } ,
    identity: { type: String, required: true },
    addlIdentity: { type: String, required: false } ,
    knownFor: { type: String, required: true },
    notableAwards: { type: String, required: false },
    youTube: { type: String, required: true },
    socialType: { type: String, required: false } ,
    socialHandle: { type: String, required: false } ,
})

const Writer = mongoose.model('Writer', writerSchema);

module.exports = Writer;