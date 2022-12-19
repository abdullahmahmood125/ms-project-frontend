import {FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {FormValidator} from "./form.validator";
import {BaseForm} from "./base-form";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable()
export class ResetPasswordForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      token: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required, FormValidator.passwordPolicy, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])],
      confirmPassword: [null, Validators.compose([Validators.required, FormValidator.passwordPolicy, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])]
    }, {
      validator: FormValidator.matchPassword
    });
  }
}
