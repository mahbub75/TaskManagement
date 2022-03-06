import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../core/services/authentication.service";
import {Router} from "@angular/router";
import {RouteService} from "../core/services/route.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BaseComponent} from "../core/components/base/base.component";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {
    loginForm = this._formBuilder.group({
        username: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
        password: ['', [Validators.required]],
    });
    formControls = this.loginForm.controls;
    isSubmitted = false;
    isPasswordHide = true;

    constructor(private _formBuilder: FormBuilder,
                private _authService: AuthenticationService,
                private _router: Router,
                private _routeService: RouteService,
                private _snackBar: MatSnackBar
                ) {
      super();
    }

    ngOnInit(): void {
        if (this._authService.isLoggedIn) {
            this._routeService.goToHome();
        }
    }

    login(): void {
        this.isSubmitted = true;
        if (!this.loginForm.valid) return;

        const username = this.loginForm.get('username')?.value;
        const password = this.loginForm.get('password')?.value;
        const user = this._authService.validateUser(username, password);
        if (user) {
            this._authService.user = user;
            this._routeService.goToHome();
        }else {
this._snackBar.open('Incorrect username or password.','',{panelClass:'error-notification'});
        }
    }
}
