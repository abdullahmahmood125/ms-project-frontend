import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';

@Component({
  selector: 'app-add-citizen-visa',
  templateUrl: './add-citizen-visa.component.html',
  styleUrls: ['./add-citizen-visa.component.css']
})
export class AddCitizenVisaComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Citizen Visa');
  }

}
