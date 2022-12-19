import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormErrorHelpingVerbDict, FormErrorMessageDict} from '../../../../enums/dictionaries/form-errors.dict';
import {FormErrorTypes} from 'src/app/enums/form-error-types';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.css']
})
export class FormErrorsComponent implements OnInit, OnChanges {

  @Input() errorObject: any;
  @Input() fieldName: string;
  @Input() serverErrors: any[];
  @Input() singular = true;

  public helpingVerb = 'is';
  public errors = [];
  public singleError = true;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {

    this.errors = [];

    if (this.errorObject && typeof (this.errorObject) === 'object') {
      this.errors = Object.keys(this.errorObject);
      if (this.errors.length && this.singleError) {
        const verb = FormErrorHelpingVerbDict[this.errors[0]];
        let message = '';
        switch (this.errors[0]) {
          case FormErrorTypes.MAX_LENGTH:
            message = this.errorObject.maxlength.requiredLength + ' characters';
            break;
          case FormErrorTypes.MIN_LENGTH:
            message = this.errorObject.minlength.requiredLength + ' characters';
            break;
          case FormErrorTypes.MIN_NUMBER:
            message = this.errorObject.minNumber.refValues[1];
            break;
          case FormErrorTypes.MAX_NUMBER:
            message = this.errorObject.maxNumber.refValues[1];
            break;
          default:
            message = FormErrorMessageDict[this.errors[0]];
            break;
        }
        /*if (this.errors[0] === FormErrorTypes.MAX_LENGTH) {
          message = this.errorObject.maxlength.requiredLength + ' characters';
        } else if (this.errors[0] === FormErrorTypes.MIN_LENGTH) {
          message = this.errorObject.minlength.requiredLength + ' characters';
        } else {
          message = FormErrorMessageDict[this.errors[0]];
        }*/

        if (!this.singular) {
          this.helpingVerb = 'are';
        } else {
          this.helpingVerb = verb ? verb : 'is';
          this.errors[0] = message ? message : this.errors[0];
        }
        this.errors = [this.errors[0]];
      }
    }
  }

}
