import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';

@Component({
  selector: 'app-add-immigration-control-branch',
  templateUrl: './add-immigration-control-branch.component.html',
  styleUrls: ['./add-immigration-control-branch.component.css']
})
export class AddImmigrationControlBranchComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Immigration Control Branch');
  }

}
