import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AppState } from '../../../common/ngrx';
import { fromUser } from '../../../common/ngrx/user';
import { UserCreate } from '../../../../../../common/entities/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private store: Store<AppState>,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.createForm();
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.store.dispatch({
        type: fromUser.actions.$.REGISTRATION,
        payload: this.registerForm.value as UserCreate
      });
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
