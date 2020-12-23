const mongoose = require('mongoose');

const writerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    identity: { type: String, required: true },
    knownFor: { type: String, required: true },
    youTube: { type: String, required: true },
    social: { type: String, required: true },
})

const Writer = mongoose.model('Writer', writerSchema);

module.exports = Writer;