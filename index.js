'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input();
options.valid() ? Notes.fetch(options) : help();

function help() {
    console.log(`
    api USAGE: api -a <text note>

     -a - String of text
    `);
    process.exit();
}