import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { AppBase } from '../base/app.base';

@Component({
  selector: 'app-sc',
  templateUrl: './sc.component.html',
  styleUrls: ['./sc.component.css']
})
export class SCComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setPageTitle('Smart Crowd');
    // this.commonService.getAddressTypes();
    // this.commonService.getContactTypes();
    // this.commonService.getCountries();
    // this.commonService.getCities();
    // this.commonService.getUserArtifacts();
    this.commonService.getTaskComplexities();

    this.commonService.getAllSkills();
    this.commonService.getUserTypes();

    // this.router.navigateByUrl('./sc/task/add-task')
  }

}
