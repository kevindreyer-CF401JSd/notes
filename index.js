const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');
// const Notesy = require('./lib/notes-schema.js');

// const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
// mongoose.connect(MONGOOSE_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


const input = new Input();
const notes = new Notes(input);

// async function addToDB(data) {

// }

input.valid() ? notes.execute() : help();

function help() {
    console.log(`
    api USAGE: api -a <text note>

     -a 'String of text in quotes'
     -c 'category name'

    `);
    process.exit();
}