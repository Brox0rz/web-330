/*  Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/28/23
    finance-calculator.js Description: Imports various validation classes and their 
		functions to validate a user's entry into the value field.
*/

import RequiredField from './required-field.js';
import FloatField from './float-field.js';
import FloatMinField from './float-min-field.js';
import FloatMaxField from './float-max-field.js';

class Validator {
	validators = [];
	messages = [];

	constructor(name, field) {
		this.name = name;
		this.field = field;
	}

	addRequiredField() {
		this.validators.push(new RequiredField(this.name, this.field));
	}
	
	addRequiredFloatField() {
		this.validators.push(new FloatField(this.name, this.field));
	}
	
	addFloatMinField(min) {
		this.validators.push(new FloatMinField(this.name, this.field, min));
	}	

	addFloatMaxField(max) {
		this.validators.push(new FloatMaxField(this.name, this.field, max))
	}

	validate() {
		let isValid = true;

		for(const validator of this.validators) {
			if (!validator.validate()) {
				this.messages.push(validator.getMessage());
				isValid = false;
			}
		}

		return isValid;
	}
}

export default Validator;