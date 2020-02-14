// const mongoose = require('mongoose');
const NotesModel = require('./notes-schema.js');

class Notes {
  constructor() {}

  async execute(options) {
    switch (options.action) {
    case 'add':
      return this.add(options.payload, options.category);
      //add list and delete here
    default:
      break;
    }
  }

  async add(text, category) {
    const newNote = new NotesModel({
      text: text,
      category: category,
    });
  
    const saved = await newNote.save();
    console.log('Created new note:', newNote.payload)
    return saved;
  }

  async delete(id) {
    await NotesModel.findByIdAndDelete(id);
    return console.log('Deleted', id);
  }

  async list(category) {
    const query = category ? { category } : {};
    const foundNotes = await NotesModel.find(query);
    foundNotes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(` Category: ${note.category}`);
    });
    return;
  }

  valid() {

  }

}

module.exports = Notes;