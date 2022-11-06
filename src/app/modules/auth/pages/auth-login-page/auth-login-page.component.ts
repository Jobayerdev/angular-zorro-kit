import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { storage } from 'src/app/services/utils/localStorage.utilservice';
@UntilDestroy()
@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: ['./auth-login-page.component.scss'],
})
export class AuthLoginPageComponent implements OnInit {
  passwordVisible = false;
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      identifier: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  loginLoading = false;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.status === 'VALID') {
      this.loginLoading = true;
    }
  }
}
