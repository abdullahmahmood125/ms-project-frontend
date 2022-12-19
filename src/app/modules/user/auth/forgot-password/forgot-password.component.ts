import {Component, Injector, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {UserModel} from "../../../../models/user.model";
import {selectUserForgotPassword} from "../../../../store/user/selectors";
import {ForgotPasswordForm} from "../../../../forms/forgot-password-form";
import {ForgotPasswordAction} from "../../../../store/user/forgot-password/actions";
import {UserForgotPasswordState} from "../../../../store/user/forgot-password/state";
import {AppBase} from "../../../base/app.base";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent extends AppBase implements OnInit {

  form: FormGroup;
  formService: ForgotPasswordForm;
  user: UserModel;
  state: UserForgotPasswordState;

  constructor(injector: Injector, private forgotPasswordForm: ForgotPasswordForm) {
    super();
    this.formService = this.forgotPasswordForm;
    this.form = this.formService.getForm();
  }

  ngOnInit() {
    this.clearLocalStorage();
    this.store.select(selectUserForgotPassword).pipe(takeUntil(this.ngUnsubscribe)).subscribe((state: UserForgotPasswordState) => {
      this.state = state;
    });
  }

  submit(): void {
    this.formService.markAsSubmitted();
    this.form.markAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ForgotPasswordAction(this.form.value));
    }
  }

}
