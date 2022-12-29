import { Component, OnInit } from '@angular/core';
import { TaskForm } from "../../../../forms/sc/task-form";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { SCBase } from '../../sc.base';
import { UserDetails } from "../../../../interfaces/user";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent extends SCBase implements OnInit {

  routerLink: string = '/sc/task/list-task/'
  form: FormGroup;
  formService: TaskForm;
  id: number = null;
  user: UserDetails = null;

  constructor(formService: TaskForm, private activatedRoute: ActivatedRoute) {
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
    this.scService.findTaskByTaskId(id).subscribe((response: any) => {
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
      params["status"] = 'new'
      let user_json = localStorage.getItem(this.helperService.LOCAL_STORAGE_KEYS.AUTH);
      this.user = user_json != null ? JSON.parse(user_json).user : null;
      params["requester_id"] = this.user.id;
      console.log(params);
      this.scService.saveScTask(params).subscribe((response: any) => {
        this.router.navigate([this.routerLink]);
        this.mapResponse();
      }, err => {
        this.mapResponse(false);
      });
    }
  }

}
