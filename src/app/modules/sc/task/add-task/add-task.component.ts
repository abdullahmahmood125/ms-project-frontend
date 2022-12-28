import { Component, OnInit } from '@angular/core';
import { BankForm } from "../../../../forms/kyc/bank-form";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { SCBase } from '../../sc.base';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent extends SCBase implements OnInit {

  routerLink: string = '/sc/task/list-task/'
  form: FormGroup;
  formService: BankForm;
  id: number = null;

  constructor(formService: BankForm, private activatedRoute: ActivatedRoute) {
    super();
    this.formService = formService;
    this.form = this.formService.getForm();
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.setPageTitle('Update Task');
      this.getById(this.id);
    } else {
      this.setPageTitle('Add Task');
    }
  }

  getById(id: number) {
    this.scService.findKycBankById(id).subscribe((response: any) => {
      this.form.patchValue(response);
    }, err => {
      this.mapResponse(false);
    });
  }

  submit() {
    this.formService.markAsSubmitted();
    if (this.form.valid) {
      let params = { ...this.form.value };
      if (this.id) {
        params.id = this.id;
      }
      this.scService.saveKycBank(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
