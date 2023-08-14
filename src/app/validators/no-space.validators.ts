import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpace {

  static noSpaceValidators(control: AbstractControl): ValidationErrors | null {

    let controlValue = control.value as string;

    if (controlValue.indexOf(' ') >= 0) {
      return { noSpaceValidators: true }
    } else {
      return null;
    }
  }
}
