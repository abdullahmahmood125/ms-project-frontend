import { Component, OnInit } from '@angular/core';
import { BankForm } from "../../../../forms/kyc/bank-form";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { KycBase } from '../../kyc.base';
@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent extends KycBase implements OnInit {

  routerLink: string = '/kyc/bank/list-bank/'
  form: FormGroup;
  formService: BankForm;
  id: number = null;

  constructor(formService: BankForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.setPageTitle('Update Bank');
      this.getById(this.id);
    } else {
      this.setPageTitle('Add Bank');
    }
  }

  getById(id: number) {
    this.kycService.findKycBankById(id).subscribe((response: any) => {
      this.form.patchValue(response);
    }, err => {
      this.mapResponse(false);
    });
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = { ...this.form.value };
      if (this.id) {
        params.id = this.id;
      }
      this.kycService.saveKycBank(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
