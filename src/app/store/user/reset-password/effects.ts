import {Injectable} from "@angular/core";
import {Effect, Actions, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable, of} from 'rxjs';
import {
  UserResetPasswordActionTypes,
  ResetPasswordAction,
  ResetPasswordErrorAction,
  ResetPasswordSuccessAction,
} from "./actions";
import {UserService} from "../../../modules/user/user.service";
import {map, catchError, debounceTime, switchMap, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {HelperService} from "../../../modules/common/shared/helper.service";

@Injectable()
export class UserResetPasswordEffects {
  @Effect()
  public resetPassword: Observable<Action> = this.actions$.pipe(
    ofType<ResetPasswordAction>(UserResetPasswordActionTypes.RESET_PASSWORD),
    debounceTime(500),
    map((action: ResetPasswordAction) => action.payload),
    switchMap(payload => {
      return this.userService.resetPassword(payload)
        .pipe(map((response: any) => {
            if (response.success === true) {
              return new ResetPasswordSuccessAction(response)
            }
            return new ResetPasswordErrorAction(response)
          }),
          catchError(error => of(new ResetPasswordErrorAction({error: error})))
        )
    })
  );
  @Effect({dispatch: false})
  resetPasswordSuccess: Observable<any> = this.actions$.pipe(
    ofType<ResetPasswordSuccessAction>(UserResetPasswordActionTypes.RESET_PASSWORD_SUCCESS),
    tap((response) => {
      this.helperService.showToast(true, 'reset_password_success');
      setTimeout(() => {
        this.router.navigateByUrl('/user/login');
      }, 5000)
    })
  );

  @Effect({dispatch: false})
  resetPasswordError: Observable<any> = this.actions$.pipe(
    ofType(UserResetPasswordActionTypes.RESET_PASSWORD_ERROR),
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
