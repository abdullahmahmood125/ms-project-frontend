import { Component, OnInit, NgZone } from '@angular/core';
import { SignOutAction } from '../../../store/user/actions';
import { AppBase } from '../../base/app.base';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends AppBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.setPageTitle('Dashboard');
    this.router.navigate(['sc']);
  }

  logout() {
    this.store.dispatch(new SignOutAction());
  }

}
