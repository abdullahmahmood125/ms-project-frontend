import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {share} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class FullViewService {

  private fullView$ = new ReplaySubject<any>();
  private fullView: boolean = false;

  off() {
    this.fullView = false;
    this.fullView$.next(this.fullView);
  }

  on() {
    this.fullView = true;
    this.fullView$.next(this.fullView);
  }
  toggle() {
    this.fullView = !this.fullView;
    this.fullView$.next(this.fullView);
  }

  get(): Observable<any> {
    return this.fullView$.asObservable().pipe(share());
  }
}
