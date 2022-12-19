import {Injectable} from "@angular/core";
import {Effect, Actions, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable, of} from 'rxjs';
import {
  RegenerateActivationAction, RegenerateActivationErrorAction, RegenerateActivationSuccessAction,
  UserActivationActionTypes,
  VerifyAction,
  VerifyErrorAction,
  VerifySuccessAction,
} from "./actions";
import {UserService} from "../../../modules/user/user.service";
import {map, catchError, debounceTime, switchMap, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {HelperService} from "../../../modules/common/shared/helper.service";

@Injectable()
export class UserTokenEffects {
  @Effect()
  public verify: Observable<Action> = this.actions$.pipe(
    ofType<VerifyAction>(UserActivationActionTypes.VERIFY),
    debounceTime(500),
    map((action: VerifyAction) => action.payload),
    switchMap(payload => {

      return this.userService.activate(payload)
        .pipe(map((response: any) => {

            if (response.result.verified === true) {
              return new VerifySuccessAction(response)
            }
            return new VerifyErrorAction(response)
          }),
          catchError(error => of(new VerifyErrorAction({error: error})))
        )
    })
  );
  @Effect({dispatch: false})
  verifySuccess: Observable<any> = this.actions$.pipe(
    ofType<VerifySuccessAction>(UserActivationActionTypes.VERIFY_SUCCESS),
    tap((response) => {
      this.helperService.showToast(true, 'account_activation_success');
      /*this.router.navigateByUrl('/dashboard');*/
    })
  );
  @Effect({dispatch: false})
  verifyError: Observable<any> = this.actions$.pipe(
    ofType<VerifyErrorAction>(UserActivationActionTypes.VERIFY_ERROR),
    tap((error) => {
      this.helperService.showToast(false, error.payload.message, error.payload.errors);
    })
  );


  @Effect()
  public regenerateActivation: Observable<Action> = this.actions$.pipe(
    ofType<RegenerateActivationAction>(UserActivationActionTypes.REGENERATE_ACTIVATION),
    debounceTime(500),
    map((action: RegenerateActivationAction) => action.payload),
    switchMap(payload => {

      return this.userService.regenerateActivationToken(payload)
        .pipe(map((response: any) => {

          if (response.success === true) {
              return new RegenerateActivationSuccessAction(response)
            }
            return new RegenerateActivationErrorAction(response)
          }),
          catchError(error => of(new RegenerateActivationErrorAction({error: error})))
        )
    })
  );
  @Effect({dispatch: false})
  regenerateActivationSuccess: Observable<any> = this.actions$.pipe(
    ofType<RegenerateActivationSuccessAction>(UserActivationActionTypes.REGENERATE_ACTIVATION_SUCCESS),
    tap((response) => {
      this.helperService.showToast(true, 'token_regeneration_success');
      /*this.router.navigateByUrl('/dashboard');*/
    })
  );
  @Effect({dispatch: false})
  regenerateActivationError: Observable<any> = this.actions$.pipe(
    ofType<RegenerateActivationErrorAction>(UserActivationActionTypes.REGENERATE_ACTIVATION_ERROR),
    tap((error) => {

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
