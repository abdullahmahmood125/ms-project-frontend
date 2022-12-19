import { Component, OnInit } from '@angular/core';
import { InsBase } from '../../ins.base';

@Component({
  selector: 'app-list-hospital',
  templateUrl: './list-hospital.component.html',
  styleUrls: ['./list-hospital.component.css']
})
export class ListHospitalComponent extends InsBase implements OnInit {

  dataRows: any[] = [];
  routerLink: string = '/ins/hospital/add-hospital/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('hospitals');
    this.getAll();
  }

  getAll() {
    this.insService.findAllInsHospital().subscribe((response: any) => {
      this.dataRows = response;
    });
  }

  deleteById(id: number) {
    this.confirmationDialogService.confirm(this.getLabel('alert'),
      this.getLabel('delete_warning'),
      this.helperService.BUTTON_TEXT.DELETE,
      this.helperService.BUTTON_TEXT.NO,
      this.helperService.BUTTON_CLASS.DANGER,
    ).then((confirmed) => {
      if (confirmed) {
        this.insService.disableInsHospitalById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}
