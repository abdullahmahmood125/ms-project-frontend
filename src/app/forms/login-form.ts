import {FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {BaseForm} from "./base-form";
import {FormValidator} from "./form.validator";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable({ providedIn: 'root'})
export class LoginForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])],
      password: [null, Validators.compose([Validators.required, Validators.maxLength(FIELD_LENGTH.MAX_CHARACTER_200)])]
    });
  }

}
