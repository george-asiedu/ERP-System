import {Component, inject} from '@angular/core';
import { Store } from '@ngrx/store';
import {AuthState} from '../store/auth.state';
import {selectIsLoading} from '../store/auth.selectors';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from '../../validators/emailValidator';
import {ForgotPassword} from '../../model/authentication';
import {authActions} from '../store/auth.actions';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private store = inject(Store<AuthState>);
  public readonly isLoading = this.store.selectSignal(selectIsLoading);
  public forgotPasswordForm: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
    })
  }

  public forgotPassword() {
    if(!this.forgotPasswordForm.invalid) return;

    const user: ForgotPassword = this.forgotPasswordForm.value;
    this.store.dispatch(authActions.forgotPassword({user}));
    this.forgotPasswordForm.reset();
  }

  public getControl(value: string) {
    return this.forgotPasswordForm.get(value);
  }
}
