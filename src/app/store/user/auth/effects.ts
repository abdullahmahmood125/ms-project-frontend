import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, config } from 'rxjs';
import {
  UserActionTypes,
  AuthenticationErrorAction,
  AuthenticationSuccessAction,
  AuthenticateAction,
  IsAuthenticatedAction,
  IsAuthenticatedSuccessAction,
  IsAuthenticatedErrorAction,
  SignOutAction,
  SignOutSuccessAction,
} from '../actions';
import { UserService } from '../../../modules/user/user.service';
import { map, catchError, debounceTime, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HelperService } from '../../../modules/common/shared/helper.service';
import { response } from '../../../interfaces/response/response';

@Injectable()
export class UserAuthEffects {

  /**
   * Already logged in.
   */
  @Effect()
  public isAuthenticated = this.actions$.pipe(
    ofType<IsAuthenticatedAction>(UserActionTypes.IS_AUTHENTICATED),
    debounceTime(500),
    map(resp => {
      if (localStorage.getItem(this.helperService.LOCAL_STORAGE_KEYS.AUTH)) {
        return new IsAuthenticatedSuccessAction(JSON.parse(localStorage.getItem(this.helperService.LOCAL_STORAGE_KEYS.AUTH)));
      }
      return new IsAuthenticatedErrorAction();
    })
  );

  /**
   * Authenticate user.
   */
  @Effect()
  public authenticate: Observable<Action> = this.actions$.pipe(
    ofType<AuthenticateAction>(UserActionTypes.AUTHENTICATE),
    debounceTime(500),
    map((action: AuthenticateAction) => action.payload),
    switchMap(payload => {
      return this.userService.login(payload)
        .pipe(map((resp: any) => {
          return new AuthenticationSuccessAction(resp);
        }, err => {
          return new AuthenticationErrorAction(err);
        }),
          catchError(error => of(new AuthenticationErrorAction({ error: error })))
        );
    })
  );


  @Effect({ dispatch: false })
  authenticateSuccess: Observable<any> = this.actions$.pipe(
    ofType<AuthenticationSuccessAction>(UserActionTypes.AUTHENTICATE_SUCCESS),
    tap((resp) => {
      const auth = {
        token: resp.payload.token,
        // expiry: resp.payload.expiry,
        // permissions: resp.payload.permissions,
        user: resp.payload.user,
      };
      localStorage.setItem(this.helperService.LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(auth));
      if (resp.redirect) {
        this.router.navigateByUrl('/user/dashboard');
      }
    })
  );
  @Effect({ dispatch: false })
  authenticateError: Observable<any> = this.actions$.pipe(
    ofType<AuthenticationErrorAction>(UserActionTypes.AUTHENTICATE_ERROR),
    tap((error) => {
      this.helperService.showToast(false, 'login_fail', []);
    })
  );
  /**
   * Terminate user session.
   */

  @Effect()
  public signOut: Observable<Action> = this.actions$.pipe(
    ofType<SignOutAction>(UserActionTypes.SIGN_OUT),
    map(() => new SignOutSuccessAction()),
  );
  @Effect({ dispatch: false })
  signOutSuccess: Observable<any> = this.actions$.pipe(
    ofType<SignOutSuccessAction>(UserActionTypes.SIGN_OUT_SUCCESS),
    tap(() => {
      localStorage.removeItem(this.helperService.LOCAL_STORAGE_KEYS.AUTH);
      this.router.navigateByUrl('/');
    })
  );

  /**
   * @constructor
   * @param {Actions }actions
   * @param {UserService} userService
   * @param {ConfigurationService} configurationService
   */
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    private helperService: HelperService
  ) {
  }
}
