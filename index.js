const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect(MONGOOSE_URI, connectionOptions);

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

if(input.valid()) {
    console.log(input);
    notes.execute(input.command)
        .then(mongoose.disconnect())
        .catch(error => console.error);
} else {
    help();
}

function help() {
    console.log(`
    api USAGE: api -a <text note>

     -a 'String of text in quotes'
     -c 'category name'

    `);
    process.exit();
}