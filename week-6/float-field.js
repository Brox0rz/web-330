/*  Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/27/23
    float-field.js Description: class to validate if field entry is a number
    and return an error message to the user if it is not a number.
*/

class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    let numberResult = parseFloat(this.field);
    if(isNaN(numberResult)) {
      return false;
    } else {
      return true;
    }
  }

  getMessage() {
    return this.name + " must be a float value. You entered " + this.field;
  }
}

export default FloatField;
