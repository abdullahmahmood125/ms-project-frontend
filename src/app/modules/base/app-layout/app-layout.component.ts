import {Component, OnInit} from '@angular/core';
import {AppBase} from "../app.base";
import {UserAuthState} from "../../../store/user/auth/state";
import {selectUserAuth} from "../../../store/user/selectors";
import {filter, takeUntil} from "rxjs/operators";
import {IsAuthenticatedAction} from "../../../store/user/actions";
import {NavigationEnd} from "@angular/router";
import {select} from "@ngrx/store";
import {FullViewService} from "./full-view.service";

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent extends AppBase implements OnInit {
  auth: UserAuthState;
  isFullScreen: boolean = false;

  constructor(private fullViewService: FullViewService) {
    super();
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        this.setFullScreen();
      });

    this.store.pipe(select(selectUserAuth)).pipe(takeUntil(this.ngUnsubscribe)).subscribe((state: UserAuthState) => {
      this.auth = state;
    });
    this.store.dispatch(new IsAuthenticatedAction());
    this.fullViewService.get().subscribe((fullView: boolean) => {
      this.isFullScreen = fullView;
    })
  }

  setFullScreen(isFullScreen: boolean = false): void {
    if (isFullScreen) {
      this.fullViewService.on();
    }else {
      this.fullViewService.off();
    }
  }
}
