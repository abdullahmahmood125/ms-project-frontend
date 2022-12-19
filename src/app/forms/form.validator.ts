import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormErrorTypes} from '../enums/form-error-types';

export const PHONE_LENGTH = 12;

export class FormValidator {
  static matchPassword(form: AbstractControl) {
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;
    if (password != confirmPassword) {
      form.get('confirmPassword').setErrors({[FormErrorTypes.MISMATCH_PASSWORD]: true});
    }
    return null;
  }

  static confirmPassword(form: AbstractControl) {
    const currentPassword = form.get('currentPassword').value;
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;
    if (password != confirmPassword) {
      form.get('confirmPassword').setErrors({[FormErrorTypes.MISMATCH_PASSWORD]: true});
    }
    if (currentPassword && currentPassword == password) {
      form.get('password').setErrors({[FormErrorTypes.SAME_AS_OLD_PASSWORD]: true});
    }
    return null;
  }

  /**Copied from validator bundle to add custom error key*/
  public static email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const error: ValidationErrors = {[FormErrorTypes.INVALID]: false};
      if (!control.value || !regex.test(String(control.value).toLowerCase())) {
        return error;
      }
      return null;
    }
  }

  /**Copied from validator bundle to add custom error key*/
  public static phone(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^[\s()+-]*([0-9][\s()+-]*){6,20}(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
      if (control.value && (!regex.test(control.value))) {
        return {[FormErrorTypes.INVALID]: false};
      }
      return null;
    };
  }

  static noWhitespaceValidator(control: AbstractControl) {
    if (control) {
      const isWhitespace = ("" + control.value || null).trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : {[FormErrorTypes.REQUIRED]: true};
    }
    return null;
  }

  static passwordPolicy(value): any {
    if (value.pristine) {
      return null;
    }
    const REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!"#$%&'()*+,-.\/\:;<=>?@[\]^_`{|}~]).{8,}$/;
    value.markAsTouched();
    if (REGEXP.test(value.value)) {
      return null;
    }
    return {
      passwordPolicy: true
    };
  }

  public static minLengthArray(min: number) {
    return (c: AbstractControl): { [key: string]: any } => {
      if (c.value.length >= min) {
        return c.hasError('minLengthArray') ? null : null;
      }
      return {'minLengthArray': true};
    };
  }
}
