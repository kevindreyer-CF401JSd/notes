const schema = require('./notes-schema.js');

class Note {
    constructor () {
    }

    get(category) {
        // const category = query.category;
        if (category) {
            return schema.find( { category });
        } else {
            return schema.find();
        }
    }

    create(note) {
        const newNote = new schema(note);
        return newNote.save()
    }

    update(_id, note) {
        return schema.findByIdAndUpdate(_id, note, { new: true});
    }

    delete(_id) {
        return schema.findByIdAndDelete(_id);
    }
}

module.exports = Note;