import { Component, OnInit } from '@angular/core';
import { InsBase } from '../../ins.base';

@Component({
  selector: 'app-add-user-policy',
  templateUrl: './add-user-policy.component.html',
  styleUrls: ['./add-user-policy.component.css']
})
export class AddUserPolicyComponent extends InsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Add User to Insurance Policy');
  }

}
