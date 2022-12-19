import { Component, OnInit } from '@angular/core';
import { KycUserForm } from "../../../../forms/kyc/kyc-user-form";
import { FormGroup } from "@angular/forms";
import { KycBase } from '../../kyc.base';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent extends KycBase implements OnInit {

  routerLink: string = '/kyc/user/list-user/'
  form: FormGroup;
  formService: KycUserForm;
  id: number = null;

  constructor(formService: KycUserForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id){
      this.setPageTitle('Update User');
      this.getById(this.id);
    } else{
      this.setPageTitle('Add User');
    }
  }

  getById(id:number) {
    this.kycService.findKycUserById(id).subscribe((response: any) => {
      this.form.patchValue(response);
    }, err => {
      this.mapResponse(false);
    });
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = {...this.form.value, version: 1};
      if (this.id) {
        params.id = this.id;
      }
      this.kycService.saveKycUser(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
