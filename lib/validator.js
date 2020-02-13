class Validator {
    // schema Check type is given type
    // schema Check if required it exist
    constructor(schema) {
        this.schema = schema;
    }

    isValid(commandString) {
        let result = true;
        // console.log('Validator isValid');

        //loop over object
        for (var key of Object.keys(this.schema)) {

            // If object is required but not in command return false
            if (this.schema[key].required) {
                if (!commandString[key]) {
                    result = false;
                }
            }

            // If object type not correct return false
            if (result) {
                // result = checkCase(commandString[key], this.schema[key].type);
                const type = typeof commandString[key];
                if (type === this.schema[key].type) {

                } else {
                    result = false;
                }
            }
        }
        return result;
    }

    // checkCase(commandType, schemaType) {
    //     const type = typeof commandType;
    //     if (type === schemaType) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

}

module.exports = Validator;