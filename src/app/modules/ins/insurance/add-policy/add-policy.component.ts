import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { InsBase } from '../../ins.base';
import { ActivatedRoute } from '@angular/router';
import { InsPolicyForm } from 'src/app/forms/ins/ins-policy-form';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent extends InsBase implements OnInit {

  routerLink: string = '/ins/insurance/list-policy/'
  form: FormGroup;
  formService: InsPolicyForm;
  id: number = null;
  companies: any[] = [];
  branches: any[] = [];

  constructor(formService: InsPolicyForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getInsCompanies();
    if (this.id){
      this.setPageTitle('Update Insurance Policy');
      this.getById(this.id);
    } else{
      this.setPageTitle('Add Insurance Policy');
    }
  }

  getById(id:number) {
    this.insService.findInsurancePolicyById(id).subscribe((response: any) => {
      this.form.patchValue(response);
      this.getBranchesByCompanyId();
    }, err => {
      this.mapResponse(false);
    });
  }

  getInsCompanies() {
    this.insService.findAllInsuranceCompany().subscribe((response: any) => {
      this.companies = response;
    });
  }

  getBranchesByCompanyId() {
    if (!this.form.get('insCompanyId').value) {
      this.getBranchesByCompanyId();
    } else{
      this.branches = []
      this.insService.getBranchesByCompanyId(this.form.get('insCompanyId').value).subscribe((response: any) => {
        this.branches = response;
      });
    }
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = {...this.form.value};
      if (this.id) {
        params.id = this.id;
      }
      this.insService.saveInsurancePolicy(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }
  
}
