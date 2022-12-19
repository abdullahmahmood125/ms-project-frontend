import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {BaseState} from '../../../store/state';
import {Router} from '@angular/router';
import {getAppURL} from './shared.methods';
import {LOCAL_STORAGE_KEYS} from "../../../enums/configuration";
import {IndividualConfig, ToastrService} from 'ngx-toastr';
import {LabelTranslationPipe} from '../pipes/label.translation.pipe';

@Injectable({providedIn: 'root'})
export class HelperService {
  LOCAL_STORAGE_KEYS = LOCAL_STORAGE_KEYS;

  TOAST_TIMEOUT = 6000;
  TOAST_CONFIG: Partial<IndividualConfig> = {
    timeOut: this.TOAST_TIMEOUT,
    closeButton: true,
    enableHtml: true,
    disableTimeOut: false,
    positionClass: 'toast-top-right'
  };

  BUTTON_TEXT = {
    OK: 'OK',
    CONTINUE: 'Continue',
    NO: 'No',
    REPLACE: 'Replace',
    SUBMIT: 'Submit',
    CANCEL: 'Cancel',
    DELETE: 'Delete',
    DISCARD: 'Discard',
    OVERWRITE: 'Overwrite',
  };

  BUTTON_CLASS = {
    DANGER: 'danger',
    SUCCESS: 'success',
  };

  NO_PROFILE_IMAGE = 'assets/images/no_profile_image.jpg';
  
  FIELD_TYPE = {
    PASSWORD: 'password',
    TEXT: 'text',
  };
  
  constructor(private store: Store<BaseState>,
              private router: Router,
              private toastr: ToastrService,
              private labelPipe: LabelTranslationPipe,) { }

  getAppURL() {
    return getAppURL();
  }

  getLabel(key, placeholder = null, value = null): string {
    return this.labelPipe.transform(key, placeholder, value);
  }

  clearToast(id=null) {
    if (id) {
      this.toastr.clear(id);
    } else {
      this.toastr.clear();
    }
  }

  showToast(success: boolean = false, message: string = null, errors = [], disableTimeOut = false) {
    const toastConfig = Object.assign(this.TOAST_CONFIG, {
      disableTimeOut: disableTimeOut,
      positionClass: 'toast-top-right',
      timeOut: this.TOAST_TIMEOUT
    });
    if (success && message) {
      this.toastr.success(this.getLabel(message), '', toastConfig);
    }
    if (!success && message) {
      this.toastr.error(this.getLabel(message), '', toastConfig);
    }
    if (errors.length) {
      errors.forEach((error) => {
        this.toastr.error(this.getLabel(error), '', toastConfig);
      });
    }
  }

  showWarning(message: string = null, disableTimeOut = false) {
    const toastConfig = Object.assign(this.TOAST_CONFIG, {
      disableTimeOut: disableTimeOut,
      timeOut: this.TOAST_TIMEOUT,
      positionClass: 'toast-top-right'
    });
    if (message) {
      this.toastr.warning(this.getLabel(message), '', toastConfig);
    }
  }

  showInfo(message: string = '', title: string = '') {
    const toastConfig = Object.assign(this.TOAST_CONFIG, {
      disableTimeOut: true,
      timeOut: 0,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    });
    if (message) {
      return this.toastr.info(this.getLabel(message), title, toastConfig);
    }
    return null;
  }
}
