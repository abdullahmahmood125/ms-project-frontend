import {Injectable} from "@angular/core";
import {Effect, Actions, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable, of} from 'rxjs';
import {
  UserForgotPasswordActionTypes,
  ForgotPasswordAction,
  ForgotPasswordErrorAction,
  ForgotPasswordSuccessAction,
} from "./actions";
import {UserService} from "../../../modules/user/user.service";
import {map, catchError, debounceTime, switchMap, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {HelperService} from "../../../modules/common/shared/helper.service";

@Injectable()
export class UserForgotPasswordEffects {
  @Effect()
  public forgotPassword: Observable<Action> = this.actions$.pipe(
    ofType<ForgotPasswordAction>(UserForgotPasswordActionTypes.FORGOT_PASSWORD),
    debounceTime(500),
    map((action: ForgotPasswordAction) => action.payload),
    switchMap(payload => {

      return this.userService.forgotPassword(payload)
        .pipe(map((response: any) => {

            if (response.success === true) {
              return new ForgotPasswordSuccessAction(response)
            }
            return new ForgotPasswordErrorAction(response)
          }),
          catchError(error => of(new ForgotPasswordErrorAction({error: error})))
        )
    })
  );
  @Effect({dispatch: false})
  forgotPasswordSuccess: Observable<any> = this.actions$.pipe(
    ofType<ForgotPasswordSuccessAction>(UserForgotPasswordActionTypes.FORGOT_PASSWORD_SUCCESS),
    tap((response) => {
      this.helperService.showToast(true, this.helperService.getLabel('forgot_password_success'));
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 3000)
    })
  );
  @Effect({dispatch: false})
  authenticateError: Observable<any> = this.actions$.pipe(
    ofType(UserForgotPasswordActionTypes.FORGOT_PASSWORD_ERROR),
    tap((error) => {
      this.helperService.showToast(false, error.payload.message, error.payload.errors);
    })
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    private helperService: HelperService
  ) {
  }
}
