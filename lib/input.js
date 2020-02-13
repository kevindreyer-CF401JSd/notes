// Modified this code based on the lab01 mob programming
// https://github.com/codefellows/seattle-javascript-401d34/tree/master/class-02/lab_01_mob_programming

const minimist = require('minimist');
const Validator = require('./validator.js');

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
    console.log('in Input.valid')
    return validator.isValid(this.command)
  }
}

module.exports = Input;