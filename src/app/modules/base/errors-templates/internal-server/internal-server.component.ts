import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-internal-server',
  templateUrl: './internal-server.component.html',
  styleUrls: ['./internal-server.component.css']
})
export class InternalServerComponent implements OnInit {

  public statusCode: number;
  public defaultStatus = 500;

  public errorMsgs: Object = {
    400: 'bad_request_error',
    403: 'forbidden_error',
    404: 'page_not_found',
    405: 'method_not_allowed',
    500: 'internal_server_error',
  };

  public errorDetails: Object = {
    400: 'bad_request_error_message',
    403: 'forbidden_error_message',
    404: 'page_not_found_message',
    405: 'method_not_allowed_message',
    500: 'internal_server_error_message',
  };

  constructor(private activatedRoute: ActivatedRoute) {
    this.statusCode = parseInt(this.activatedRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {

  }
}
