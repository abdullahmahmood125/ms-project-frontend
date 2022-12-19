import { Component, OnInit } from '@angular/core';
import { InsBase } from '../../ins.base';
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { HospitalBranchForm } from 'src/app/forms/ins/hospital-branch-form';
@Component({
  selector: 'app-add-hospital-branch',
  templateUrl: './add-hospital-branch.component.html',
  styleUrls: ['./add-hospital-branch.component.css']
})
export class AddHospitalBranchComponent extends InsBase implements OnInit {

  routerLink: string = '/ins/hospital/list-hospital-branch/'
  form: FormGroup;
  formService: HospitalBranchForm;
  id: number = null;
  hospitals: any[] = [];

  constructor(formService: HospitalBranchForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getInsHospitals();
    if (this.id){
      this.setPageTitle('Update Hospital Branch');
      this.getById(this.id);
    } else{
      this.setPageTitle('Add Hospital Branch');
    }
  }

  getById(id:number) {
    this.insService.findInsuranceHospitalBranchById(id).subscribe((response: any) => {
      this.form.patchValue(response);
      this.getCityByCountryId();
    }, err => {
      this.mapResponse(false);
    });
  }

  getInsHospitals() {
    this.insService.findAllInsHospital().subscribe((response: any) => {
      this.hospitals = response;
    });
  }

  getCityByCountryId() {
    if (!this.hospitals || !this.hospitals.length) {
      this.getCityByCountryId();
    } else {
      const hospital = this.hospitals.find(b => b.id == this.form.get('insHospitalId').value);
      this.commonService.getCitiesByCountry(hospital.countryId);
    }
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = {...this.form.value};
      if (this.id) {
        params.id = this.id;
      }
      this.insService.saveInsuranceHospitalBranch(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
