import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AppState, fromUser } from '../../../common/ngrx';
import { UserConnect} from '../../../../../../common/entities/user';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  connectForm: FormGroup;

  constructor(private store: Store<AppState>,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.connectForm = this.createForm();
  }

  public onSubmit(): void {
    if (this.connectForm.valid) {
      this.store.dispatch({ type: fromUser.actions.$.CONNECTION, payload: this.connectForm.value });
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
