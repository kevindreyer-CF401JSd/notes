// const mongoose = require('mongoose');
const NotesModel = require('./notes-schema.js');

class Notes {
  constructor() {}

  async execute(options) {
    switch (options.action) {
    case 'add':
      return this.add(options.payload, options.category);
    case 'list':
      return this.list(options.payload);
    case 'delete':
      return this.delete(options.payload);
    default:
      return Promise.resolve();
    }
  }

  async add(text, category) {
    console.log('in Notes.add');
    const newNote = new NotesModel({
      text: text,
      category: category,
    });
    console.log('text', text);
    const saved = await newNote.save();
    console.log('saved', saved);
    console.log('Created new note:', newNote.text)
    return saved;
  }

  async delete(id) {
    await NotesModel.findByIdAndDelete(id)
      .then(() => console.log('Deleted Note ID', id));
    return;
  }

  async list(category) {
    const query = category ? { category } : {};
    const foundNotes = await NotesModel.find(query);
    foundNotes.forEach(note => {
      console.log('note:',note.text);
      console.log('');
      console.log(` Category: ${note.category}  ID: ${note.id}`);
      console.log('----------------------------------');
      console.log('');
    });
    return;
  }

}

module.exports = Notes;