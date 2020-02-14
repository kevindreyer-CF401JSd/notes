// Modified this code based on the lab01 mob programming
// https://github.com/codefellows/seattle-javascript-401d34/tree/master/class-02/lab_01_mob_programming

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes module', () => {

    //Tests for execute()
    it('execute() does nothing when the options are invalid', () => {
        const thisCommandWillFail = { command: { 'x': 'cocnut'} };
        const notes = new Notes(thisCommandWillFail);
        notes.execute();
        expect(console.log).not.toHaveBeenCalled;
    });
  
    it('Notes.prototype.add() can add a note', () => {
        const action = 'add';
        const payload = 'this will succeed';
        const notes = new Notes({ command: { action: action, payload: payload } });
        // we could have written this as { command: {action, payload}}
        notes.execute();
        expect(console.log).toHaveBeenCalledWith(`adding note: ${payload}`);
    });

});