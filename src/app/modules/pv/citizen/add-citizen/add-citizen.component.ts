import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';
import { CitizenForm } from "../../../../forms/pv/citizen-form";
import { FormGroup } from "@angular/forms";
@Component({
  selector: 'app-add-citizen',
  templateUrl: './add-citizen.component.html',
  styleUrls: ['./add-citizen.component.css']
})
export class AddCitizenComponent extends AppBase implements OnInit {

  form: FormGroup;
  formService: CitizenForm;

  constructor(formService: CitizenForm) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Citizen');
  }

  submit() {
    this.formService.markAsSubmitted();
  }

}
