import { Component, OnInit } from '@angular/core';
import { KycBase } from '../../kyc.base';

@Component({
  selector: 'app-list-user-account',
  templateUrl: './list-user-account.component.html',
  styleUrls: ['./list-user-account.component.css']
})
export class ListUserAccountComponent extends KycBase implements OnInit {

  dataRows: any[] = [];
  banks: any[] = [];
  branches: any[] = [];
  users: any[] = [];
  routerLink: string = '/kyc/user/add-user-account/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('User Account');
    this.getAll();
    this.getKycBanks();
    this.getKycBankBranches();
    this.getKycUsers();
  }

  getAll() {
    this.kycService.findAllKycUserAccount().subscribe((response: any) => {
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

  getKycBankBranches() {
    this.kycService.findAllKycBankBranch().subscribe((response: any) => {
      this.branches = response;
    });
  }

  findBankBranchById(id: number) {
    return this.branches?.find(c => c.id == id);
  }

  getKycUsers() {
    this.kycService.findAllKycUser().subscribe((response: any) => {
      this.users = response;
    });
  }

  findKycUserById(id: number) {
    return this.users?.find(c => c.id == id);
  }

  deleteById(id: number) {
    this.confirmationDialogService.confirm(this.getLabel('alert'),
      this.getLabel('delete_warning'),
      this.helperService.BUTTON_TEXT.DELETE,
      this.helperService.BUTTON_TEXT.NO,
      this.helperService.BUTTON_CLASS.DANGER,
    ).then((confirmed) => {
      if (confirmed) {
        this.kycService.disableKycUserAccountById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}

