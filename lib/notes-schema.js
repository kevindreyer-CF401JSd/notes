const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({

    category: { 
        type: String, 
        required:false, 
        default: 'uncategorized',
    },
    text: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('notes', notesSchema);