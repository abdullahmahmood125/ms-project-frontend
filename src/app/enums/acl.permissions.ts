import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

const PERMISSIONS = {
  DASHBOARD: 'DASHBOARD', // [All]
};

function accessDeniedForRoute(rejectedPermissionName: string,
  activateRouteSnapshot: ActivatedRouteSnapshot,
  routerStateSnapshot: RouterStateSnapshot) {
  console.log('rejectedPermissionName', rejectedPermissionName);
  console.log('activateRouteSnapshot', activateRouteSnapshot);
  console.log('routerStateSnapshot', routerStateSnapshot);
  return 'error/server/403';
}

export { PERMISSIONS, accessDeniedForRoute };
