import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../store/auth.state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {selectIsLoading} from '../store/auth.selectors';
import {twoFactorCodeValidator} from '../../validators/twoFactorCodeValidator';
import {VerifyResetCode} from '../../model/authentication';
import {authActions} from '../store/auth.actions';

@Component({
  selector: 'app-email-verification',
  standalone: false,

  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss'
})
export class EmailVerificationComponent {
  private store = inject(Store<AuthState>);
  public emailVerificationForm: FormGroup;
  public isLoading = this.store.selectSignal(selectIsLoading);
  public codeInputs = Array(6).fill(0);

  public constructor(private fb: FormBuilder) {
    this.emailVerificationForm = this.fb.group({
      verificationCode: ['', [Validators.required, twoFactorCodeValidator()]],
    })
  }

  public emailVerification() {
    if(this.emailVerificationForm.invalid) return;

    const verificationCode: VerifyResetCode = this.emailVerificationForm.value;
    this.store.dispatch(authActions.verifyResetCode({verificationCode}));
    this.emailVerificationForm.reset();
  }

  public getDigit(index: number): string {
    const code = this.emailVerificationForm.value.twoFactorCode || '';
    return code[index] || '';
  }

  public updateCode(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    let code = this.emailVerificationForm.value.twoFactorCode || '';

    if (input.value.length === 1) {
      code = code.substring(0, index) + input.value + code.substring(index + 1);
      this.emailVerificationForm.patchValue({ twoFactorCode: code });

      const nextInput = document.getElementById(`twoFactorCode${index + 1}`) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  }

  public handleBackspace(event: Event, index: number) {
    const keyboardEvent = event as KeyboardEvent;

    if (keyboardEvent.key === 'Backspace') {
      const input = event.target as HTMLInputElement;

      if (!input.value && index > 0) {
        const prevInput = document.getElementById(`twoFactorCode${index - 1}`) as HTMLInputElement;
        if (prevInput) prevInput.focus();
      }
    }
  }

  public getControl(value: string) {
    return this.emailVerificationForm.get(value);
  }
}
