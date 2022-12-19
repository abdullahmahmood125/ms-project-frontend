import {FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {BaseForm} from "../base-form";
import {FormValidator} from "../form.validator";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable({ providedIn: 'root'})
export class InsPolicyForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      insCompanyId: [null, Validators.compose([Validators.required])],
      insCompanyBranchId: [null, Validators.compose([Validators.required])],
      buyingPrice: [null, Validators.compose([Validators.required,])],
      maxLimit: [null, Validators.compose([Validators.required])],
      perDayLimit: [null, Validators.compose([Validators.required])],
    });
  }

}
