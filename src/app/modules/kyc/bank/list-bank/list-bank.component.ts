import { Component, OnInit } from '@angular/core';
import { KycBase } from '../../kyc.base';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.css']
})
export class ListBankComponent extends KycBase implements OnInit {

  dataRows: any[] = [];
  routerLink: string = '/kyc/bank/add-bank/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Banks');
    this.getAll();
  }

  getAll() {
    this.kycService.findAllKycBank().subscribe((response: any) => {
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
        this.kycService.disableKycBankById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}
