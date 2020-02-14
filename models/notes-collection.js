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

}