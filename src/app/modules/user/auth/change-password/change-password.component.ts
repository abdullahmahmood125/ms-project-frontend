import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserForm} from '../../../../forms/user.form';
import {response} from '../../../../interfaces/response/response';
import {AppBase} from "../../../base/app.base";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends AppBase implements OnInit {

  public form: FormGroup;

  constructor(public userForm: UserForm) {
    super();
    this.form = this.userForm.getChangePasswordForm();
  }

  ngOnInit() {
    this.setPageTitle('change_password');
  }

  updatePassword() {
    this.userForm.markAsSubmitted();
    this.form.markAsTouched();
    if (this.form.valid) {
      this.saveState.loading = true;
      this.userService.changePassword(this.form.value).subscribe((response: response) => {
          if (response.success) {
            this.setMessage('password_update_success');
            setTimeout(() => {
              this.router.navigateByUrl('/user/dashboard');
            }, 1000);
          }
          this.mapResponse();
        });
    }
  }
}
