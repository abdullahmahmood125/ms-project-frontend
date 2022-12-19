import { Component, OnInit } from '@angular/core';
import { InsBase } from '../../ins.base';

@Component({
  selector: 'app-list-hospital-branch',
  templateUrl: './list-hospital-branch.component.html',
  styleUrls: ['./list-hospital-branch.component.css']
})
export class ListHospitalBranchComponent extends InsBase implements OnInit {

  dataRows: any[] = [];
  hospitals: any[] = [];
  routerLink: string = '/ins/hospital/add-hospital-branch/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Hospital Branches');
    this.getAll();
    this.getInsHospitals();
  }

  getAll() {
    this.insService.findAllInsuranceHospitalBranch().subscribe((response: any) => {
      this.dataRows = response;
    });
  }

  getInsHospitals() {
    this.insService.findAllInsHospital().subscribe((response: any) => {
      this.hospitals = response;
    });
  }

  findHospitalById(id: number) {
    return this.hospitals?.find(c => c.id == id);
  }

  deleteById(id: number) {
    this.confirmationDialogService.confirm(this.getLabel('alert'),
      this.getLabel('delete_warning'),
      this.helperService.BUTTON_TEXT.DELETE,
      this.helperService.BUTTON_TEXT.NO,
      this.helperService.BUTTON_CLASS.DANGER,
    ).then((confirmed) => {
      if (confirmed) {
        this.insService.disableInsuranceHospitalBranchById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}
