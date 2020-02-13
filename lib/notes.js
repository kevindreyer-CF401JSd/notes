const mongoose = require('mongoose');
const Notesy = require('./notes-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function addToDB(actType,data) {
  const note = new Notesy({
    action: actType,
    payload: data,
  });

  await note.save();
  console.log('note', note);

  mongoose.disconnect();
}

class Notes {
  constructor(options) {
    this.action = options.command.action;
    this.payload = options.command.payload;
  }

  execute() {
    switch (this.action) {
      case 'add':
        this.add(this.payload);
        break;
      default:
        break;
    }
  }

  add(payload) {
    console.log(`adding note: ${payload}`);

    addToDB(this.action,this.payload);
  }

  valid() {

  }

}

module.exports = Notes;