/*  Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/28/23
    float-max-field.js Description: class to validate if field entry is below the 
    max allowed number and return an error message to the user if it is too high.
*/

class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  validate() {
    let numberResult = parseFloat(this.field);
    if(this.field < this.max) {
      return true;
    } else {
      return false;
      }
  }

  getMessage() {
    return this.name + " must be less than " + this.max + ". You entered " + this.field;
  }
}

export default FloatMaxField