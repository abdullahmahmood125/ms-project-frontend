import { Component, OnInit } from '@angular/core';
import { CompanyForm } from "../../../../forms/ins/company-form";
import { FormGroup } from "@angular/forms";
import { InsBase } from '../../ins.base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent extends InsBase implements OnInit {

  routerLink: string = '/ins/insurance/list-company/'
  form: FormGroup;
  formService: CompanyForm;
  id: number = null;

  constructor(formService: CompanyForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id){
      this.setPageTitle('Update Insurance Company');
      this.getById(this.id);
    } else{
      this.setPageTitle('Add Insurance Company');
    }
  }

  getById(id:number) {
    this.insService.findInsuranceCompanyById(id).subscribe((response: any) => {
      this.form.patchValue(response);
    }, err => {
      this.mapResponse(false);
    });
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = {...this.form.value};
      if (this.id) {
        params.id = this.id;
      }
      this.insService.saveInsuranceCompany(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }
  
}
