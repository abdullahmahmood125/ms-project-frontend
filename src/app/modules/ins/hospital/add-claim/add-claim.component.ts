import { Component, OnInit } from '@angular/core';
import { ClaimForm } from "../../../../forms/ins/claim-form";
import { FormGroup } from "@angular/forms";
import { InsBase } from '../../ins.base';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent extends InsBase implements OnInit {

  form: FormGroup;
  formService: ClaimForm;

  constructor(formService: ClaimForm) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Claim');
  }

  submit() {
    this.formService.markAsSubmitted();
  }

}
