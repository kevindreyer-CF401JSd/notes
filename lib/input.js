// Modified this code based on the lab01 mob programming
// https://github.com/codefellows/seattle-javascript-401d34/tree/master/class-02/lab_01_mob_programming

const minimist = require('minimist');

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
    if (this.command.action && this.command.payload && this.command.payload !== true) {
      return true;
    }
    return false;
  }
}

module.exports = Input;