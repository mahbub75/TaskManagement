import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../core/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
    password: ['', [Validators.required]],
  });
  formControls = this.loginForm.controls;
  isSubmitted = false;
isPasswordHide = true;
  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.isSubmitted = true;
    if (!this.loginForm.valid) return;

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    const isUserValid = this.authService.isUserAuthValid(username, password);
    if (isUserValid){
      const user = this.authService.user;
      this.router.navigate(['/' + user.role]);
    } else {

    }


  }
}
