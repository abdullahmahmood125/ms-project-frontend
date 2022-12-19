import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { BaseForm } from "./base-form";
import { FormValidator } from './form.validator';
import { FIELD_LENGTH } from '../enums/field-length';

@Injectable()
export class UserForm extends BaseForm {
  signUpFields = {
    firstName: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
    lastName: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
    fatherName: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
    identityNo: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
    userName: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
    email: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200), FormValidator.email()])],
    password: [null, Validators.compose([Validators.required, FormValidator.passwordPolicy,
      Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])],
    confirmPassword: [null, Validators.compose([Validators.required, FormValidator.passwordPolicy,
      Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])],
  };
  baseValidators = {
    validator: FormValidator.matchPassword
  };

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    this.form = this.fb.group(this.signUpFields, this.baseValidators);
    return this.form;
  }

  getChangePasswordForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      currentPassword: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])],
      password: [null, Validators.compose([Validators.required, FormValidator.passwordPolicy, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])],
      confirmPassword: [null, Validators.compose([Validators.required, FormValidator.passwordPolicy, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])],
    },
    {
      validator: [FormValidator.confirmPassword]
    });
  }

}
