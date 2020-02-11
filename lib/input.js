
// const isUrl = require('is-url');
const minimist = require('minimist');

const rules = {
  add: { require: true }
};

function Input() {
  const args = minimist(process.argv.slice(2));
  this.add = this.getAdd(args.a);
}

Input.prototype.getAdd = function (note = "") {
    return note;
}

Input.prototype.valid = function () {
  return Object.keys(rules).every((option) => {
    return rules[option].required ? !!this[option] : true;
  });
}

module.exports = Input;