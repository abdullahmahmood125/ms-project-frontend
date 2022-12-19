import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';

@Component({
  selector: 'app-add-citizen-immigration-control',
  templateUrl: './add-citizen-immigration-control.component.html',
  styleUrls: ['./add-citizen-immigration-control.component.css']
})
export class AddCitizenImmigrationControlComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Citizen Immigration');
  }

}
