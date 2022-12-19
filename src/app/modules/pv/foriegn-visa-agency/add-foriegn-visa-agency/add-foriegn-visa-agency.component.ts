import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';
import { ForeignVisaAgencyForm } from "../../../../forms/pv/foreign-visa-agency-form";
import { FormGroup } from "@angular/forms";
@Component({
  selector: 'app-add-foriegn-visa-agency',
  templateUrl: './add-foriegn-visa-agency.component.html',
  styleUrls: ['./add-foriegn-visa-agency.component.css']
})
export class AddForiegnVisaAgencyComponent extends AppBase implements OnInit {

  form: FormGroup;
  formService: ForeignVisaAgencyForm;

  constructor(formService: ForeignVisaAgencyForm) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Foreign Visa Agency');
  }

  submit() {
    this.formService.markAsSubmitted();
  }

}
