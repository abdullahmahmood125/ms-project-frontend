import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';

@Component({
  selector: 'app-add-foriegn-visa-agency-branch',
  templateUrl: './add-foriegn-visa-agency-branch.component.html',
  styleUrls: ['./add-foriegn-visa-agency-branch.component.css']
})
export class AddForiegnVisaAgencyBranchComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Foreign Visa Agency Branch');
  }

}
