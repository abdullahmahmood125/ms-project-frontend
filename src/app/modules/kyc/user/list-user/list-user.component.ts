import { Component, OnInit } from '@angular/core';
import { KycBase } from '../../kyc.base';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent extends KycBase implements OnInit {

  dataRows: any[] = [];
  routerLink: string = '/kyc/user/add-user/'
  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Users');
    this.getAll();
  }

  getAll() {
    this.kycService.findAllKycUser().subscribe((response: any) => {
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
        this.kycService.disableKycUserById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}