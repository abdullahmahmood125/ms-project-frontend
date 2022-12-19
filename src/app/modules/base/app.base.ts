import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { PERMISSIONS } from "../../enums/acl.permissions";
import { NgxPermissionsService } from "ngx-permissions";
import { AppInjector } from "../../app-injector";
import { HelperService } from "../common/shared/helper.service";
import { Store } from "@ngrx/store";
import { BaseState } from "../../store/state";
import { SignOutAction } from "../../store/user/actions";
import { UserService } from "../user/user.service";
import { response } from "../../interfaces/response/response";
import { SetPageTitleAction } from "../../store/config/actions";
import { CommonService } from '../common/shared/common.service';
import { ConfirmationDialogService } from '../common/shared/confirmation-dialog/confirmation-dialog.service';

@Component({
  template: ''
})

export abstract class AppBase implements OnDestroy {
  public PERMISSIONS = PERMISSIONS;
  public store: Store<BaseState>;
  public subscription: Subscription = new Subscription();
  public helperService: HelperService;
  public router: Router;
  public permissionsService: NgxPermissionsService;
  public ngUnsubscribe: Subject<void> = new Subject<void>();
  public userService: UserService;
  public commonService: CommonService;
  public confirmationDialogService: ConfirmationDialogService;

  public saveState = {
    loading: false,
    success: false,
    errors: [],
    message: '',
    result: null
  };

  protected constructor() {
    this.helperService = AppInjector.get(HelperService);
    this.router = AppInjector.get(Router);
    this.confirmationDialogService = AppInjector.get(ConfirmationDialogService);
    this.permissionsService = AppInjector.get(NgxPermissionsService);
    this.ngUnsubscribe = new Subject<void>();
    this.userService = AppInjector.get(UserService);
    this.commonService = AppInjector.get(CommonService);
    this.store = AppInjector.get<Store<BaseState>>(Store);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  logout() {
    this.store.dispatch(new SignOutAction());
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  can(perm): boolean {
    return !!(this.permissionsService.getPermission(perm));
  }

  resetSavedState() {
    this.saveState = {
      loading: false,
      success: false,
      errors: [],
      message: '',
      result: null
    };
  }
  
  updateReference(referenceObject) {
    return JSON.parse(JSON.stringify(referenceObject))
  }

  setPageTitle(key): void {
    this.store.dispatch(new SetPageTitleAction(this.getLabel(key)));
  }

  getLabel(key, placeholder = null, value = null): string {
    return this.helperService.getLabel(key, placeholder, value);
  }

  setMessage(key) {
    this.saveState.message = key;
  }

  mapResponse(isSuccess: boolean = true, message: string = null): void {
    this.saveState.success = isSuccess;
    message = message ? message : isSuccess ? 'save_success' : 'error_occur';
    this.saveState.loading = false;
    this.saveState.message = message;
    setTimeout(() => {
      this.resetSavedState();
    }, this.helperService.TOAST_CONFIG.timeOut + 100);
    this.helperService.showToast(this.saveState.success, this.saveState.message, this.saveState.errors);
  }
}
