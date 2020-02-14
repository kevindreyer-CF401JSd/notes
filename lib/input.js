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

    console.log('parseInput', args);

    let allArguments = Object.keys(args);
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];
    // look at allArguments and filter for correct arguments take the first one that does

    return {
      action: possibleArguments[keyOfArgument],
      payload: typeof args[keyOfArgument] === 'string' ? args[keyOfArgument] : undefined,
      category: args.category || args.c,
    }
    // Return an object that looks like {action: 'add', payload: 'Hello world'}
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