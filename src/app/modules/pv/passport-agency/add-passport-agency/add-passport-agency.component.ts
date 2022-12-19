import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';
import { PassportAgencyForm } from "../../../../forms/pv/passport-agency-form";
import { FormGroup } from "@angular/forms";
@Component({
  selector: 'app-add-passport-agency',
  templateUrl: './add-passport-agency.component.html',
  styleUrls: ['./add-passport-agency.component.css']
})
export class AddPassportAgencyComponent extends AppBase implements OnInit {

  form: FormGroup;
  formService: PassportAgencyForm;

  constructor(formService: PassportAgencyForm) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Passport Agency');
  }

  submit() {
    this.formService.markAsSubmitted();
  }
}
