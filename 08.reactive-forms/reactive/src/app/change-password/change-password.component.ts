import { PasswordValidator } from './../common/validator/password.validator';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidator.checkOldPassword],
      newPassword: ['', [Validators.required, Validators.minLength(3)] ],
      confirmPassword: ['', Validators.required ]
    }, {
      validator: PasswordValidator.shouldPasswordMatches
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  ngOnInit() {
  }

}
