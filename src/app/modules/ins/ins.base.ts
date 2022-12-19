import { Component, OnDestroy } from "@angular/core";
import { AppInjector } from "src/app/app-injector";
import { AppBase } from "../base/app.base";
import { InsService } from "./ins.service";

@Component({
  template: ''
})

export abstract class InsBase extends AppBase implements OnDestroy {

  public insService: InsService;

  constructor() {
    super();
    this.insService = AppInjector.get(InsService);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
