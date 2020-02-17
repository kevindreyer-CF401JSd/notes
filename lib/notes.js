// const mongoose = require('mongoose');
const NotesModel = require('./notes-schema.js');
const NoteCollection = require('./notes-collection.js');
let note = new NoteCollection();

class Notes {
  constructor() {}

  async execute(options) {
    // console.log('options',options);
    switch (options.action) {
    case 'add':
      return this.add(options.payload, options.category);
    case 'list':
      return this.list(options.category);
    case 'delete':
      return this.delete(options.payload);
    case 'update':
      return this.update(options.id, options.payload);
    default:
      return Promise.resolve();
    }
  }

  async add(text, category) {
    const newNote = new NotesModel({
      text: text,
      category: category,
    });
    const saved = await note.create(newNote);
    return saved;
  }

  async delete(id) {
    await note.delete(id)
      .then(() => console.log('Deleted Note ID', id));
    return;
  }

  async list(category) {
    // console.log('list:', category);
    // const query = category ? { category } : {};
    // const foundNotes = await NotesModel.find(query);
    const cat = typeof category === 'string' ? category : undefined;
    const foundNotes = await note.get(cat);
    console.log('----------------------------------');
    foundNotes.forEach(note => {
      console.log(' Note:',note.text);
      console.log(` Category: ${note.category}  ID: ${note.id}`);
      console.log('----------------------------------');
    });
    return;
  }

  async update(id, update) {
    // console.log('update:', id, update);
    const updatedNote = await note.update(id, update);
    console.log('updatedNote:', updatedNote);
    return updatedNote;
  }

}

module.exports = Notes;