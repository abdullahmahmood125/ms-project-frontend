import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BUTTON_CLASS} from "../../../../enums/field-length";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  @Input() btnOkClass: string;
  @Input() errors: string[];

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.close(false);
  }

  successClass() {
    return this.btnOkClass === BUTTON_CLASS.SUCCESS;
  }

  dangerClass() {
    return this.btnOkClass === BUTTON_CLASS.DANGER;
  }
}
