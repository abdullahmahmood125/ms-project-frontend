import { Component, OnInit } from '@angular/core';
import { HospitalForm } from "../../../../forms/ins/hospital-form";
import { FormGroup } from "@angular/forms";
import { InsBase } from '../../ins.base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent extends InsBase implements OnInit {

  routerLink: string = '/ins/hospital/list-hospital/'
  form: FormGroup;
  formService: HospitalForm;
  id: number = null;

  constructor(formService: HospitalForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id){
      this.setPageTitle('Update Hospital');
      this.getById(this.id);
    } else{
      this.setPageTitle('Add Hospital');
    }
  }

  getById(id:number) {
    this.insService.findInsHospitalById(id).subscribe((response: any) => {
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
      this.insService.saveInsHospital(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
