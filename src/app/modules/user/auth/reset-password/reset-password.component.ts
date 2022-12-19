import {Component, Injector, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {UserModel} from "../../../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {selectUserResetPassword} from "../../../../store/user/selectors";
import {ResetPasswordForm} from "../../../../forms/reset-password-form";
import {ResetPasswordAction} from "../../../../store/user/reset-password/actions";
import {UserResetPasswordState} from "../../../../store/user/reset-password/state";
import {AppBase} from "../../../base/app.base";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent extends AppBase implements OnInit {
  token: string;
  form: FormGroup;
  formService: ResetPasswordForm;
  user: UserModel;
  state: UserResetPasswordState;

  constructor(injector: Injector, private resetPasswordForm: ResetPasswordForm, private route: ActivatedRoute) {
    super();
    this.formService = this.resetPasswordForm;
    this.form = this.formService.getForm();
    this.route.queryParams.subscribe(params => {
      this.token = encodeURIComponent(params['token']);
      this.form.get('token').setValue(this.token);
    });
  }

  ngOnInit() {
    this.clearLocalStorage();
    this.store.select(selectUserResetPassword).pipe(takeUntil(this.ngUnsubscribe)).subscribe((state: UserResetPasswordState) => {
      this.state = state;
    });
  }

  submit(): void {
    this.formService.markAsSubmitted();
    this.form.markAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ResetPasswordAction(this.form.value));
    }
  }

}
