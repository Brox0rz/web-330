/*  Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/28/23
    float-max-field.js Description: class to validate if field entry is above the 
    min allowed number and return an error message to the user if it is too low.
*/

class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    let numberResult = parseFloat(this.field);
    if(this.field > this.min) {
      return true;
    } else {
      return false;
      }
  }

  getMessage() {
    return this.name + " must be more than" + ". You entered " + this.field
  }
}

export default FloatMinField