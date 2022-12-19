import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {UserService} from "../../modules/user/user.service";
import {Router} from "@angular/router";

@Injectable()
export class UserEffects {
  /**
   * @constructor
   * @param {Actions }actions
   * @param {UserService} userService
   */
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {
  }
}
