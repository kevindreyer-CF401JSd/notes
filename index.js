const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
// the .then here from a post online
mongoose.connect(MONGOOSE_URI, connectionOptions)
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

if(input.valid()) {
    // console.log(input);
    notes.execute(input.command)
    .then(mongoose.disconnect)
    .catch(error => console.error(error));
} else {
    help();
}

function help() {
    console.log(`
    api USAGE: api -a <text note>

     -a <note> 'String of text in quotes'
     -c <category> 'category name to'
     -l <optional category name> 'list all notes'
     -d <id> 'delete a note by id'

    `);
    process.exit();
}