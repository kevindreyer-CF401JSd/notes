const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    action: { type:'string', required:true},
    payload: { type:'string', required:true}
});

module.exports = mongoose.model('notes', notesSchema)