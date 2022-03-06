import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AuthenticationService} from "./core/services/authentication.service";
import {Router} from "@angular/router";
import {loginPath} from "./core/routs-constant";
import {RouteService} from "./core/services/route.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  constructor(private authService: AuthenticationService, private routeService: RouteService) {
  }
  signOut(){
    this.authService.signOut();
    this.routeService.goToLoginPage();
  }

  get isLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }
}
