const Notes = require('../lib/notes.js');

  jest.spyOn(global.console, 'log');

  describe('Notes', () => {
      it('execute() does nothing when the options are invalid', () => {
          const thisCommandWillFail = { command: { 'x': 'cocnut'} };
          const notes = new Notes(thisCommandWillFail);
          notes.execute();
          expect(console.log)

      })
  })

  it('Notes.prototype.add() can add a note', () => {
      const thisCommandWillSucceed = {
          command: {
              'add': 'this will succeed',
          },
      }
  })