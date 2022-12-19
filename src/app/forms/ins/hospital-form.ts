import {FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {BaseForm} from "../base-form";
import {FormValidator} from "../form.validator";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable({ providedIn: 'root'})
export class HospitalForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required,])],
      countryId: [null, Validators.compose([Validators.required])],
      shortCode: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, FormValidator.email()])],
      contactNumber: [null, Validators.compose([Validators.required, FormValidator.phone()])],
    });
  }

}
