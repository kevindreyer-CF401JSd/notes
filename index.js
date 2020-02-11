// Modified this could based on the lab01 mob programming
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

input.valid() ? notes.execute() : help();

function help() {
    console.log(`
    api USAGE: api -a <text note>

     -a 'String of text in quotes'
    `);
    process.exit();
}