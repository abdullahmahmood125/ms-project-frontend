import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { BaseForm } from "./base-form";
import { FormValidator } from './form.validator';
import { FIELD_LENGTH } from '../enums/field-length';

@Injectable()
export class UserEditForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    this.form = this.fb.group({
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
      fatherName: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
      identityNo: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
      userName: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
      email: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200), FormValidator.email()])],
      userTypeLabel: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_500)])],
    });
    return this.form;
  }

}
