/*  Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/27/23
    required-field.js Description: generates a message that input is required 
*/

class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return Boolean(this.field);
    }

    getMessage() {
        let message = this.name + " is a required field.";
        return message;

    }

}

export default RequiredField