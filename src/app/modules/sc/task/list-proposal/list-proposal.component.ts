import { Component, OnInit } from '@angular/core';
import { SCBase } from '../../sc.base';

@Component({
  selector: 'app-list-proposal',
  templateUrl: './list-proposal.component.html',
  styleUrls: ['./list-proposal.component.css']
})
export class ListProposalComponent extends SCBase implements OnInit {

  dataRows: any[] = [];
  routerLink: string = '/sc/task/add-proposal/'
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Proposals');
    this.getAll();
    console.log("dataRows: " + this.dataRows);

  }

  getAll() {
    this.scService.findAllProposals().subscribe((response: any) => {
      this.dataRows = response;
      console.log("response: " + response);
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
        this.scService.disableKycBankById(id).subscribe((response: any) => {
          this.getAll();
          this.mapResponse(true, 'Deleted Successfully');
        }, err => {
          this.mapResponse(false);
        });
      }
    });
  }

}
