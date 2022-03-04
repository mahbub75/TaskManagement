import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../core/services/authentication.service";
import {Router} from "@angular/router";
import {Role} from "../core/models/role.enum";

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
    const user = this.authService.validateUser(username, password);
    if (user) {
      this.authService.user = user;
      if (user.role === Role.Admin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/worker/' + user.id]);
      }
    }
  }
}
