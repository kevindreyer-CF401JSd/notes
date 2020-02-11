const notes = {};

notes.fetch = function (opts) {
    if (opts) {
      console.log(`Add ${opts.add}`);
    }
}

module.exports = notes;