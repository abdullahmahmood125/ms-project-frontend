import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';

@Component({
  selector: 'app-add-passport-agency-branch',
  templateUrl: './add-passport-agency-branch.component.html',
  styleUrls: ['./add-passport-agency-branch.component.css']
})
export class AddPassportAgencyBranchComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Passport Agency Branch');
  }

}
