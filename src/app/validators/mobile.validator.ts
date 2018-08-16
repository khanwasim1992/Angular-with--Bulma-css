import { AbstractControl } from '@angular/forms';

export function validateMobile(control : AbstractControl){
  var pattern = new RegExp("^[0-9]{10}$");
  if(!pattern.test(control.value)){
    return { validMobile : true};
  }
  return null;
}
