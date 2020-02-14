const schema = require('./food-schema.js');

class Note {

    constructor() {

    }

    get(category) {
        if (category) {
            return schema.findOne({category});
        }
        else {
            return schema.find({});
        }
    }

    create(noteRecord) {
        let newRecord = new schema(noteRecord);
        return newRecord.save();
    }

    // update() from class food demo
    update(_id, record) {
      return schema.findByIdAndUpdate(_id, record, { new: true });
    }

    // delete() from class food demo
    delete(_id) {
      return schema.findByIdAndDelete(_id);
    }

}