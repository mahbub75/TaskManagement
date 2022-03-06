import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "../core/services/authentication.service";
import {RouteService} from "../core/services/route.service";

@Injectable()
export class AdminPanelGuard  implements CanActivate {
  constructor(private authService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private routeService: RouteService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAdmin = this.authService.isAdmin;
    const isLoggedIn = this.authService.isLoggedIn;
    if (isLoggedIn) {
      if (isAdmin) {
        return true;
      } else {
        this.routeService.notifyInvalidAccess();
        this.routeService.goToHome();
        return false;
      }
    } else {
      this.routeService.notifyInvalidAccess();
      this.routeService.goToLoginPage();
      return false;
    }
  }
}
