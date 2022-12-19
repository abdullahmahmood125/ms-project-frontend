import { Component, OnInit } from '@angular/core';
import { InsBase } from '../../ins.base';
import { CompanyBranchForm } from 'src/app/forms/ins/company-branch-form';
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-company-branch',
  templateUrl: './add-company-branch.component.html',
  styleUrls: ['./add-company-branch.component.css']
})
export class AddCompanyBranchComponent extends InsBase implements OnInit {

  routerLink: string = '/ins/insurance/list-company-branch/'
  form: FormGroup;
  formService: CompanyBranchForm;
  id: number = null;
  companies: any[] = [];

  constructor(formService: CompanyBranchForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getInsCompanies();
    if (this.id){
      this.setPageTitle('Update Insurance Company Branch');
      this.getById(this.id);
    } else{
      this.setPageTitle('Add Insurance Company Branch');
    }
  }

  getById(id:number) {
    this.insService.findInsuranceCompanyBranchById(id).subscribe((response: any) => {
      this.form.patchValue(response);
      this.getCityByCountryId();
    }, err => {
      this.mapResponse(false);
    });
  }

  getInsCompanies() {
    this.insService.findAllInsuranceCompany().subscribe((response: any) => {
      this.companies = response;
    });
  }

  getCityByCountryId() {
    if (!this.companies || !this.companies.length) {
      this.getCityByCountryId();
    } else {
      const company = this.companies.find(b => b.id == this.form.get('insCompanyId').value);
      this.commonService.getCitiesByCountry(company.countryId);
    }
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = {...this.form.value};
      if (this.id) {
        params.id = this.id;
      }
      this.insService.saveInsuranceCompanyBranch(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
