/* eslint-disable @angular-eslint/prefer-standalone */
import {Component, inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../validators/emailValidator';
import { passwordValidator } from '../../validators/passwordValidator';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/auth.state';
import {selectIsLoading} from '../store/auth.selectors';
import {Signin} from '../../model/authentication';
import {authActions} from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  public signinForm: FormGroup;
  public showPassword = false;
  private store = inject(Store<AuthState>);
  public isLoading = this.store.selectSignal(selectIsLoading);

  public constructor(private fb:FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]],
      rememberMe: false
    });
  }

  public onSignin() {
    if(this.signinForm.invalid) return;

    const user: Signin = this.signinForm.value;
    this.store.dispatch(authActions.signin({user}));
    this.signinForm.reset();
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public getControl(value: string) {
    return this.signinForm.get(value);
  }
}
