import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AppBase} from "../../../base/app.base";
import {response} from "../../../../interfaces/response/response";
import {UserEditForm} from "../../../../forms/user-edit.form";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends AppBase implements OnInit {

  form: FormGroup;
  formService: UserEditForm;

  constructor(public userEditForm: UserEditForm, ) {
    super();
    this.formService = this.userEditForm;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.setPageTitle('My Profile');
    const auth = localStorage.getItem(this.helperService.LOCAL_STORAGE_KEYS.AUTH);
    const user = auth != null ? JSON.parse(auth).user : null;
    this.form.patchValue(user);
    // this.getProfile(user_json['id']);
  }

  getProfile(id: number) {
    this.userService.profile(id).subscribe((response: response) => {
      this.form.patchValue(response);
    }, err => {
      this.mapResponse(false);
    });
  }

  submit(): void {
    this.formService.markAsSubmitted();
    this.form.markAsTouched();
    if (this.form.valid) {
      const params = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        fatherName: this.form.value.lastName,
      }
      this.userService.register(params).subscribe((response: response) => {
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
