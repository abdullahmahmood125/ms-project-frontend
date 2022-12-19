import { Component, OnInit } from '@angular/core';
import { InsBase } from '../../ins.base';

@Component({
  selector: 'app-list-policy',
  templateUrl: './list-policy.component.html',
  styleUrls: ['./list-policy.component.css']
})
export class ListPolicyComponent extends InsBase implements OnInit {

  dataRows: any[] = [];
  companies: any[] = [];
  branches: any[] = [];
  routerLink: string = '/ins/insurance/add-policy/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Insurance Policies');
    this.getAll();
    this.getInsCompanies();
    this.getInsCompanyBranches();
  }

  getAll() {
    this.insService.findAllInsurancePolicy().subscribe((response: any) => {
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

  getInsCompanyBranches() {
    this.insService.findAllInsuranceCompanyBranch().subscribe((response: any) => {
      this.branches = response;
    });
  }

  findCompanyBranchById(id: number) {
    return this.branches?.find(c => c.id == id);
  }

  deleteById(id: number) {
    this.confirmationDialogService.confirm(this.getLabel('alert'),
      this.getLabel('delete_warning'),
      this.helperService.BUTTON_TEXT.DELETE,
      this.helperService.BUTTON_TEXT.NO,
      this.helperService.BUTTON_CLASS.DANGER,
    ).then((confirmed) => {
      if (confirmed) {
        this.insService.disableInsurancePolicyById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}

