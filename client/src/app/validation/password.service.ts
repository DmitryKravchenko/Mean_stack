import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirm').value; // to get value in input tag
    console.log(password, confirmPassword);
    if(password != confirmPassword) {
      console.log('false');
      AC.get('confirm').setErrors( {MatchPassword: false} )
    } else {
      console.log('true');
      AC.get('confirm').setErrors( {MatchPassword: null} )
      return null
    }
  }
}

