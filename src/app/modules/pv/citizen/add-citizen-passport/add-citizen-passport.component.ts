import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';

@Component({
  selector: 'app-add-citizen-passport',
  templateUrl: './add-citizen-passport.component.html',
  styleUrls: ['./add-citizen-passport.component.css']
})
export class AddCitizenPassportComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Add Citizen Passport');
  }

}
