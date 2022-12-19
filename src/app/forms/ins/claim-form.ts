import {FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {BaseForm} from "../base-form";
import {FormValidator} from "../form.validator";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable({ providedIn: 'root'})
export class ClaimForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      amount: [null, Validators.compose([Validators.required,])],
      claimType: [null, Validators.compose([Validators.required])],
      comments: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      startTime: [null, Validators.compose([Validators.required])],
      endTime: [null, Validators.compose([Validators.required])],
      hospital: [null, Validators.compose([Validators.required])],
      hospitalBranch: [null, Validators.compose([Validators.required])],
    });
  }

}
