import { Component, OnInit } from '@angular/core';
import { InsBase } from '../../ins.base';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent extends InsBase implements OnInit {

  dataRows: any[] = [];
  routerLink: string = '/ins/insurance/add-company/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Insurance Companies');
    this.getAll();
  }

  getAll() {
    this.insService.findAllInsuranceCompany().subscribe((response: any) => {
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
        this.insService.disableInsuranceCompanyById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}
