import {FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {BaseForm} from "../base-form";
import {FormValidator} from "../form.validator";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable({ providedIn: 'root'})
export class KycUserForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      firstName: [null, Validators.compose([Validators.required,])],
      lastName: [null, Validators.compose([Validators.required,])],
      fatherName: [null, Validators.compose([Validators.required,])],
      identityNo: [null, Validators.compose([Validators.required])],
      userName: [null, Validators.compose([Validators.required])],
      userType: [null, Validators.compose([Validators.required])],
    });
  }

}
