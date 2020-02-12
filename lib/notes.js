// Modified this code based on the lab01 mob programming
// https://github.com/codefellows/seattle-javascript-401d34/tree/master/class-02/lab_01_mob_programming
function Notes(options) {
  this.action = options.command.action;
  this.payload = options.command.payload;
}

//Do something with the input
Notes.prototype.execute = function() {
  switch (this.action) {
    case 'add':
      this.add(this.payload);
      break;
    default:
      break;
  }
};

Notes.prototype.add = function(payload) {
  console.log(`adding note: ${payload}`);
}

module.exports = Notes;