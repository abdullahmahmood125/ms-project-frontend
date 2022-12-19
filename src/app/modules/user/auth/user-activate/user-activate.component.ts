import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {BaseState} from "../../../../store/state";
import {RegenerateActivationAction, VerifyAction} from "../../../../store/user/activate/actions";
import {selectUserActivation} from "../../../../store/user/selectors";
import {UserActivationState} from "../../../../store/user/activate/state";
import {AppBase} from "../../../base/app.base";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-user-activate',
  templateUrl: './user-activate.component.html',
  styleUrls: ['./user-activate.component.css']
})
export class UserActivateComponent extends AppBase implements OnInit {
  token: string;
  state: UserActivationState;

  constructor(injector: Injector, private route: ActivatedRoute) {
    super();
    this.route.queryParams.subscribe(params => {
      this.token = encodeURIComponent(params['token']);
    });
  }

  ngOnInit() {
    this.clearLocalStorage();
    this.store.select(selectUserActivation).pipe(takeUntil(this.ngUnsubscribe)).subscribe((state: UserActivationState) => {
      this.state = state;
    });
    if (this.token) {
      this.store.dispatch(new VerifyAction({token: this.token}));
    }
  }

  regenerateActivationToken(): void {
    this.store.dispatch(new RegenerateActivationAction({token: this.token}));
  }
}
