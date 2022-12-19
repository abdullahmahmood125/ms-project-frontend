import { Component, OnInit } from '@angular/core';
import { KycBase } from '../../kyc.base';

@Component({
  selector: 'app-list-bank-branch',
  templateUrl: './list-bank-branch.component.html',
  styleUrls: ['./list-bank-branch.component.css']
})
export class ListBankBranchComponent extends KycBase implements OnInit {

  dataRows: any[] = [];
  banks: any[] = [];
  routerLink: string = '/kyc/bank/add-bank-branch/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Bank Branches');
    this.getAll();
    this.getKycBanks();
  }

  getAll() {
    this.kycService.findAllKycBankBranch().subscribe((response: any) => {
      this.dataRows = response;
    });
  }

  getKycBanks() {
    this.kycService.findAllKycBank().subscribe((response: any) => {
      this.banks = response;
    });
  }

  findBankById(id: number) {
    return this.banks?.find(c => c.id == id);
  }

  deleteById(id: number) {
    this.confirmationDialogService.confirm(this.getLabel('alert'),
      this.getLabel('delete_warning'),
      this.helperService.BUTTON_TEXT.DELETE,
      this.helperService.BUTTON_TEXT.NO,
      this.helperService.BUTTON_CLASS.DANGER,
    ).then((confirmed) => {
      if (confirmed) {
        this.kycService.disableKycBankBranchById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}
