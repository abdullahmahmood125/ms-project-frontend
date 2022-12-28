import { Component, OnInit } from '@angular/core';
import { AppBase } from 'src/app/modules/base/app.base';
import { UserDetails } from "../../../../interfaces/user";
import { selectUserAuthUser } from "../../../../store/user/selectors";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends AppBase implements OnInit {

  public isCollapsed = false;
  user: UserDetails = null;


  constructor() {
    super();
    let user_json = localStorage.getItem(this.helperService.LOCAL_STORAGE_KEYS.AUTH);
    this.user = user_json != null ? JSON.parse(user_json).user : null;
  }

  ngOnInit() {
    this.store.select(selectUserAuthUser).subscribe((state: UserDetails) => {
      if (state) {
        setTimeout(() => {
          this.user = state;
        }, 0);
      }
    });
  }

}
