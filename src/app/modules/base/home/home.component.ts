import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppBase} from "../app.base";
import {selectUserAuth} from "../../../store/user/selectors";
import {UserAuthState} from "../../../store/user/auth/state";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AppBase implements OnInit, OnDestroy {

  auth: UserAuthState;

  constructor() {
    super();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    super.ngOnDestroy();
  }

  ngOnInit() {
    this.subscription.add(this.store.select(selectUserAuth).subscribe((state: UserAuthState) => {
      this.auth = state;
      if (state.success) {
        this.router.navigateByUrl('/user/dashboard');
      }
    }));
  }

  openTermsAndConditionsModal() {
  }

}
