import {Component, OnInit} from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends AppBase implements OnInit {

  public isCollapsed = false;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
