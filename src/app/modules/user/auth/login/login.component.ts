import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthenticateAction} from "../../../../store/user/actions";
import {selectUserAuth} from "../../../../store/user/selectors";
import {UserAuthState} from "../../../../store/user/auth/state";
import {AppBase} from "../../../base/app.base";
import {LoginForm} from "../../../../forms/login-form";
import {UserModel} from '../../../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBase implements OnInit, OnDestroy {
  form: FormGroup;
  user: UserModel;
  state: UserAuthState;
  formService: LoginForm;

  constructor(private loginForm: LoginForm) {
    super();
    this.formService = this.loginForm;
    this.form = this.formService.getForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription.add(this.store.select(selectUserAuth).subscribe((state: UserAuthState) => {
      this.state = state;
      if (state.success) {
        this.router.navigateByUrl('/user/dashboard');
      }
    }));
  }

  login(): void {
    this.formService.markAsSubmitted();
    this.form.markAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new AuthenticateAction(this.form.value));
    }
  }
}
