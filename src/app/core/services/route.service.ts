import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {adminModulePath, loginPath, taskModulePath} from "../routs-constant";
import {Role} from "../models/role.enum";
import {AuthenticationService} from "./authentication.service";
import {CoreModule} from "../core.module";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: CoreModule
})
export class RouteService {

  constructor(private router: Router, private authService: AuthenticationService, private _snackBar: MatSnackBar) {
  }

  goToLoginPage(): void {
    this.router.navigate(['/' + loginPath]);
  }

  goToHome(): void {
    const user = this.authService.user;
    if (user.role === Role.Admin) {
      this.router.navigate(['/' + adminModulePath]);
    } else {
      this.router.navigate(['/' + taskModulePath + '/' + user.id]);
    }
  }

  notifyInvalidAccess(): void {
    this._snackBar.open('invalid access', '', {panelClass: 'error-notification'});
  }
}
