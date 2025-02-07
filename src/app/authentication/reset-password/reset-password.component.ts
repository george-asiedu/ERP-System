import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/auth.state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {selectIsLoading} from '../store/auth.selectors';
import {passwordValidator} from '../../validators/passwordValidator';
import {ResetPassword} from '../../model/authentication';
import {authActions} from '../store/auth.actions';
import {confirmPasswordValidator} from '../../validators/confirmPasswordValidator';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  private store = inject(Store<AuthState>);
  public resetPasswordForm: FormGroup;
  public readonly isLoading = this.store.selectSignal(selectIsLoading);
  public showPassword: boolean = false;

  public constructor(private fb: FormBuilder) {
    this.resetPasswordForm = fb.group({
      newPassword: ['', [Validators.required, passwordValidator()]],
      confirmNewPassword: ['', [Validators.required, confirmPasswordValidator('newPassword')]],
    })
  }

  public resetPassword() {
    if (this.resetPasswordForm.invalid) return;

    const user: ResetPassword = this.resetPasswordForm.value;
    this.store.dispatch(authActions.resetPassword({user}));
    this.resetPasswordForm.reset();
  }

  public toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  public getControl(value: string) {
    return this.resetPasswordForm.get(value);
  }
}
