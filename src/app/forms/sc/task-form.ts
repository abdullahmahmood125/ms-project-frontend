import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { BaseForm } from "../base-form";
import { FormValidator } from "../form.validator";
import { FIELD_LENGTH } from "src/app/enums/field-length";

@Injectable({ providedIn: 'root' })
export class TaskForm extends BaseForm {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  getForm() {
    this.markAsSubmitted(false);
    return this.form = this.fb.group({
      task_title: [null, Validators.compose([Validators.required,])],
      main_skill_id: [null, Validators.compose([Validators.required])],
      complexity_id: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      payment_amount: [null, Validators.compose([Validators.required])],
      end_time: [null, Validators.compose([Validators.required])],

      // email: [null, Validators.compose([Validators.required, FormValidator.email()])],
      // contactNumber: [null, Validators.compose([Validators.required, FormValidator.phone()])],

      // complexity_text: [null, Validators.compose([Validators.required])],
      // complexity_id: [null, Validators.compose([Validators.required])],
      // status: [null, Validators.compose([Validators.required])],
      // description: [null, Validators.compose([Validators.required])],
      // main_skill_id: [null, Validators.compose([Validators.required])],
      // payment_amount: [null, Validators.compose([Validators.required])],




    });
  }

}
