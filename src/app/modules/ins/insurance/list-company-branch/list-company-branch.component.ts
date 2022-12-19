import { Component, OnInit } from '@angular/core';
import { InsBase } from '../../ins.base';

@Component({
  selector: 'app-list-company-branch',
  templateUrl: './list-company-branch.component.html',
  styleUrls: ['./list-company-branch.component.css']
})
export class ListCompanyBranchComponent extends InsBase implements OnInit {

  dataRows: any[] = [];
  companies: any[] = [];
  routerLink: string = '/ins/insurance/add-company-branch/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Insurance Company Branches');
    this.getAll();
    this.getInsCompanies();
  }

  getAll() {
    this.insService.findAllInsuranceCompanyBranch().subscribe((response: any) => {
      this.dataRows = response;
    });
  }

  getInsCompanies() {
    this.insService.findAllInsuranceCompany().subscribe((response: any) => {
      this.companies = response;
    });
  }

  findCompanyById(id: number) {
    return this.companies?.find(c => c.id == id);
  }

  deleteById(id: number) {
    this.confirmationDialogService.confirm(this.getLabel('alert'),
      this.getLabel('delete_warning'),
      this.helperService.BUTTON_TEXT.DELETE,
      this.helperService.BUTTON_TEXT.NO,
      this.helperService.BUTTON_CLASS.DANGER,
    ).then((confirmed) => {
      if (confirmed) {
        this.insService.disableInsuranceCompanyBranchById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}
