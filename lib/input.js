const minimist = require('minimist');
const Validator = require('./validator.js');

class Input {

  constructor() {
    const args = minimist(process.argv.splice(2));
    // args will be an object representing the args in key value pair
    this.command = this.parseInput(args);
  }

  parseInput(args) {
    let possibleArguments = {
      a: 'add',
      add: 'add',
      d: 'delete',
      delete: 'delete',
      l: 'list',
      list: 'list',
    };

    let allArguments = Object.keys(args);
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];

    return {
      action: possibleArguments[keyOfArgument],
      payload: typeof args[keyOfArgument] === 'string' ? args[keyOfArgument] : undefined,
      category: args.category || args.c,
    }
  };

  valid() {
    console.log('in input.valid');
    let schema = { 
      action: { type:'string', required:true},
      // payload: { type:'string', required:true},
    }
    let validator = new Validator(schema);
    return validator.isValid(this.command)
  }
}

module.exports = Input;