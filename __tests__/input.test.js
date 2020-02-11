const Input = require('../lib/input.js');

jest.mock('minimist');
// replaces a minimist call with the below return
const minimist = require('minimist');
minimist.mockImplementation(() => {
    return {
        a: 'this is a note'
    };
});

describe('Input module', () => {
//function Parse input test
    it('parseInput() returns a properly formed object', () => {
        const options = new Input();
        const command = options.parseInput({ a: 'This should succeed' });
        expect(command.action).toBeDefined();
        expect(command.payload).toBeDefined();
    });

//function Valid test
    it('valid() respects a properly formed input', () => {
        const options = new Input();
        expect(options.valid()).toBeTruthy();
    });
    it('valid() rejects improperly formed input', () => {
        let options = new Input();
        options.command = {};
        expect(options.valid()).toBeTruthy();
    });
});