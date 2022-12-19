import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';
import { ImmigrationControlForm } from "../../../../forms/pv/immigration-control-form";
import { FormGroup } from "@angular/forms";
@Component({
  selector: 'app-add-immigration-control',
  templateUrl: './add-immigration-control.component.html',
  styleUrls: ['./add-immigration-control.component.css']
})
export class AddImmigrationControlComponent extends AppBase implements OnInit {

  form: FormGroup;
  formService: ImmigrationControlForm;

  constructor(formService: ImmigrationControlForm) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Immigration Control');
  }

  submit() {
    this.formService.markAsSubmitted();
  }

}
