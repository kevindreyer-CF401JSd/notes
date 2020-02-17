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
      u: 'update',
      update: 'update',
    };

    let allArguments = Object.keys(args);
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];
    console.log('args',args);
    console.log('allArguments',allArguments);
    console.log('keyOfArgument',keyOfArgument);

    return {
      action: possibleArguments[keyOfArgument],
      payload: typeof args[keyOfArgument] === 'string' ? args[keyOfArgument] : undefined,
      category: args.category || args.c || args.l || args.list,
    }
  };

  valid() {
    console.log('in input.valid:', this.command);
    let schema = { 
      action: { type:'string', required:true},
      // payload: { type:'string', required:true},
    }
    let validator = new Validator(schema);
    return validator.isValid(this.command)
  }
}

module.exports = Input;