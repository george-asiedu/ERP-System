import { Component, inject } from '@angular/core';
import { TwoFactorAuth } from '../../model/authentication';
import { authActions } from '../store/auth.actions';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectIsLoading } from '../store/auth.selectors';
import { AuthState } from '../store/auth.state';
import { Store } from '@ngrx/store';
import {twoFactorCodeValidator} from '../../validators/twoFactorCodeValidator';

@Component({
  selector: 'app-verify-account',
  standalone: false,
  templateUrl: './verify-account.component.html',
  styleUrl: './verify-account.component.scss'
})
export class VerifyAccountComponent {
  private store = inject(Store<AuthState>);
  public isLoading = this.store.selectSignal(selectIsLoading);
  public twoFactorAuthForm: FormGroup;
  public codeInputs = Array(6).fill(0);

  public constructor(private fb:FormBuilder) {
    this.twoFactorAuthForm = this.fb.group({
      twoFactorCode: ['', [Validators.required, twoFactorCodeValidator()]]
    });
  }

  public verifyAccount() {
    if(this.twoFactorAuthForm.invalid) return;

    const twoFactorCode: TwoFactorAuth = this.twoFactorAuthForm.value;
    this.store.dispatch(authActions.verifyAccount({twoFactorCode}));
    this.twoFactorAuthForm.reset();
  }

  public getDigit(index: number): string {
    const code = this.twoFactorAuthForm.value.twoFactorCode || '';
    return code[index] || '';
  }

  public updateCode(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    let code = this.twoFactorAuthForm.value.twoFactorCode || '';

    if (input.value.length === 1) {
      code = code.substring(0, index) + input.value + code.substring(index + 1);
      this.twoFactorAuthForm.patchValue({ twoFactorCode: code });

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
    return this.twoFactorAuthForm.get(value);
  }
}
