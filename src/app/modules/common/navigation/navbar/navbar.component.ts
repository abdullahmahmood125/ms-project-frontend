import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';
import { selectUserAuthUser } from "../../../../store/user/selectors";
import { UserDetails } from "../../../../interfaces/user";
import { AppBase } from 'src/app/modules/base/app.base';
import { selectConfig } from 'src/app/store/config/selectors';
import { ConfigState } from 'src/app/store/config/state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppBase implements OnInit {

  @ViewChild('navPanel') navPanelRef: ElementRef;

  pageTitle: string = null;
  user: UserDetails = null;
  public profilePicture = null;

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
          this.profilePicture = this.user.media;
        }, 0);
      }
    });
    this.store.select(selectConfig).subscribe((state: ConfigState) => {
      if (state) {
        setTimeout(() => {
          this.pageTitle = state.page_title;
        }, 0);
      }
    });
  }
}
