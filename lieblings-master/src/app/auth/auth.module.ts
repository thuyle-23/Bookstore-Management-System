import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotComponent } from './forgot/forgot.component';
import { ValidComponent } from './valid/valid.component';
import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent, ValidComponent, ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    Ng9PasswordStrengthBarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
