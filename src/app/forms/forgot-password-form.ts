import {FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {BaseForm} from "./base-form";
import {FormValidator} from "./form.validator";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable()
export class ForgotPasswordForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, FormValidator.email(), Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])],
    });
  }
}
