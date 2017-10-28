import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AppState, fromBase } from '../../../common/ngrx';
import { PgVg } from '../../../common/interfaces';
import { pgVgList } from '../../../common/data';
import { BaseCreate, Base } from '../../../../../../common/entities/base';

@Component({
  selector: 'app-base-create',
  templateUrl: './base-create.component.html',
  styleUrls: ['./base-create.component.scss']
})
export class BaseCreateComponent implements OnInit {
  public baseCreateForm: FormGroup;
  public pgVgList: PgVg[] = pgVgList;
  public isEditMod: boolean;
  public editedBase: Base;

  constructor(private store: Store<AppState>,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.isEditMod = !!this.route.snapshot.params.baseId;
    console.log('data', this.route.snapshot.data);
    if (this.isEditMod) {
      this.editedBase = this.route.snapshot.data.base;
      console.log('this.editedMod', this.editedBase);
    }
    this.baseCreateForm = this.createForm();
  }

  public remove(base: Base): void {
    this.store.dispatch({ type: fromBase.types.REMOVE, payload: this.editedBase });
    this.router.navigate(['']);
  }

  public onSubmit(): void {
    if (this.baseCreateForm.valid) {
      if (this.isEditMod) {
        this.store.dispatch({ type: fromBase.types.UPDATE, payload: this.formatData() });
      } else {
        this.store.dispatch({ type: fromBase.types.ADD, payload: this.formatData() });
      }
      this.router.navigate(['']);
    }
  }

  private createForm(): FormGroup {
    let label = '';
    let ml: number = null;
    let price: number = null;
    let pgVg: string = null;
    let link = '';
    let imageUrl = '';
    if (this.isEditMod) {
      label = this.editedBase.label;
      ml = this.editedBase.ml;
      price = this.editedBase.price;
      pgVg = this.pgVgList.find(item => item.pg === this.editedBase.pg).label;
      link = this.editedBase.link;
      imageUrl = this.editedBase.imageUrl;
    }
    return this.fb.group({
      label: [label, Validators.required],
      ml: [ml, [Validators.required, Validators.min(0)]],
      price: [price, [Validators.required, Validators.min(0)]],
      pgVg: [pgVg, Validators.required],
      link: [link],
      imageUrl: [imageUrl]
    });
  }

  private formatData(): BaseCreate | Base {
    const pgVg: PgVg = this.pgVgList
      .find(item => item.label === this.baseCreateForm.controls.pgVg.value);
    let base: BaseCreate | Base;
    if (this.isEditMod) {
      base = Object.assign({}, this.editedBase, this.baseCreateForm.value, {
        pg: pgVg.pg,
        vg: pgVg.vg
      });
      delete base['pgVg'];
    } else {
      base = Object.assign(this.baseCreateForm.value, {
        pg: pgVg.pg,
        vg: pgVg.vg
      });
      delete base['pgVg'];
    }
    return base;
  }
}
