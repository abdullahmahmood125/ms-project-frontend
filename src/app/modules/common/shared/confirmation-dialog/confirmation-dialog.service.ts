import {Injectable} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ConfirmationDialogComponent} from './confirmation-dialog.component';

@Injectable({providedIn: 'root'})
export class ConfirmationDialogService {

  public modalRef;

  constructor(private modalService: NgbModal) {

  }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    btnOkClass: string = 'success',
    dialogSize: 'sm' | 'lg' = 'lg',
    headerMedia: string = '',
    // errors = this.errors
  ): Promise<boolean> {
    this.modalRef = this.modalService.open(ConfirmationDialogComponent, {size: dialogSize});
    this.modalRef.componentInstance.title = title;
    this.modalRef.componentInstance.message = message;
    this.modalRef.componentInstance.btnOkText = btnOkText;
    this.modalRef.componentInstance.btnCancelText = btnCancelText;
    this.modalRef.componentInstance.btnOkClass = btnOkClass;
    this.modalRef.componentInstance.headerMedia = headerMedia;
    // this.modalRef.componentInstance.errors = this.errors;
    return this.modalRef.result;
  }

  public lotDeletion(
    title: string,
    message: string
  ): Promise<boolean> {
    this.modalRef = this.modalService.open(ConfirmationDialogComponent, {size: 'lg'});
    this.modalRef.componentInstance.title = title;
    this.modalRef.componentInstance.message = message;
    this.modalRef.componentInstance.btnCancelText = 'Cancel';
    this.modalRef.componentInstance.lotDeletion = true;

    // this.modalRef.componentInstance.errors = this.errors;
    return this.modalRef.result;
  }

}
