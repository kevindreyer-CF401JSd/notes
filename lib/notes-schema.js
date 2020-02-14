const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    // action: { type: String, required:true},
    // payload: { type: String, required:true},
    category: { 
        type: String, 
        required:false, 
        default: 'uncategorized',
    },
    text: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('notes', notesSchema);