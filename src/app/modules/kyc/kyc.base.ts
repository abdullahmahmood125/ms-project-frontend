import { Component, OnDestroy } from "@angular/core";
import { AppInjector } from "src/app/app-injector";
import { AppBase } from "../base/app.base";
import { KycService } from "./kyc.service";

@Component({
  template: ''
})

export abstract class KycBase extends AppBase implements OnDestroy {

  public kycService: KycService;

  constructor() {
    super();
    this.kycService = AppInjector.get(KycService);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
