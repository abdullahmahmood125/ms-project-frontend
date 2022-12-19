import {FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {BaseForm} from "../base-form";
import {FormValidator} from "../form.validator";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable({ providedIn: 'root'})
export class KycUserAccountForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      kycUserId: [null, Validators.compose([Validators.required,])],
      accountNo: [null, Validators.compose([Validators.required,])],
      accountType: [null, Validators.compose([Validators.required,])],
      bankId: [null, Validators.compose([Validators.required,])],
      branchId: [null, Validators.compose([Validators.required,])],
      openingBalance: [null, Validators.compose([Validators.required,])],
      currentBalance: [null, Validators.compose([Validators.required,])],
    });
  }

}
