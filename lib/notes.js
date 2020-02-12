// Modified this code based on the lab01 mob programming
// https://github.com/codefellows/seattle-javascript-401d34/tree/master/class-02/lab_01_mob_programming

class Notes {
  constructor(options) {
    this.action = options.command.action;
    this.payload = options.command.payload;
  }

  execute() {
    switch (this.action) {
      case 'add':
        this.add(this.payload);
        break;
      default:
        break;
    }
  }

  add(payload) {
    console.log(`adding note: ${payload}`);
  }

}

module.exports = Notes;