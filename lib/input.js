const minimist = require('minimist');
const Validator = require('./validator.js');
const mongoose = require('mongoose');
// const Notesy = require('./notes-schema.js');

// const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
// mongoose.connect(MONGOOSE_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

class Input {

  constructor() {
    let args = minimist(process.argv.splice(2));
    // args will be an object representing the args in key value pair
    this.command = this.parseInput(args);
  }

  parseInput(args) {
    let possibleArguments = {
      a: 'add',
      add: 'add'
    };
    let allArguments = Object.keys(args);
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];
    // look at allArguments and filter for correct arguments take the first one that does

    return {
      action: possibleArguments[keyOfArgument],
      payload: args[keyOfArgument],
    }
    // Return an object that looks like {action: 'add', payload: 'Hello world'}
  };

  valid() {
    // return true if valid otherwise return false
    // valid inputs have an action and a payload
    // inputs are in the this.command
    // check if action exist, and payload, and payload is not the boolean true
    let schema = { 
      action: { type:'string', required:true},
      payload: { type:'string', required:true}
    }
    // check that command has valid action and payload based on schema

    const validator = new Validator(schema);
    return validator.isValid(this.command)
  }
}

module.exports = Input;