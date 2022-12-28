import { Component, OnDestroy } from "@angular/core";
import { AppInjector } from "src/app/app-injector";
import { AppBase } from "../base/app.base";
import { SCService } from "./sc.service";

@Component({
  template: ''
})

export abstract class SCBase extends AppBase implements OnDestroy {

  public scService: SCService;

  constructor() {
    super();
    this.scService = AppInjector.get(SCService);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
