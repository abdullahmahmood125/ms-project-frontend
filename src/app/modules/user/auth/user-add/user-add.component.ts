import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AppBase} from "../../../base/app.base";
import {response} from "../../../../interfaces/response/response";
import {UserForm} from "../../../../forms/user.form";


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent extends AppBase implements OnInit {

  form: FormGroup;
  formService: UserForm;

  constructor(public userSignUpForm: UserForm) {
    super();
    this.formService = this.userSignUpForm;
    this.form = this.formService.getForm();
  }

  ngOnInit() {
    this.clearLocalStorage();
  }

  submit(): void {
    this.formService.markAsSubmitted();
    this.form.markAsTouched();
    if (this.form.valid) {
      this.saveState.loading = true;
      this.userService.register(this.form.value).subscribe((response: response) => {
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 2000);
        this.mapResponse(true, 'register_success');
      }, err => {
        this.mapResponse(false);
      });
    }
  }
}
