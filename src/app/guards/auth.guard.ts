import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SharedModule} from "../modules/common/shared/shared.module";
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';
import {LOCAL_STORAGE_KEYS} from "../enums/configuration";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private ngxRolesService: NgxRolesService, private permissionsService: NgxPermissionsService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH)) {
      return true;
    }
    this.router.navigate(['user/login']);
    return false;
  }
}
