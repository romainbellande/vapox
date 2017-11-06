import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormInput } from '../../../common/interfaces';

@Component({
  selector: 'app-comp-form',
  templateUrl: './comp-form.component.html',
  styleUrls: ['./comp-form.component.scss']
})
export class CompFormComponent implements OnInit {
  @Input() public inputs: FormInput[];
  @Input() public form: FormGroup;
  @Input() public isEditMod: boolean;
  @Input() public previousUrl: string;
  @Output() public onSubmit: EventEmitter<FormGroup> = new EventEmitter();
  @Output() public onRemove: EventEmitter<Component> = new EventEmitter();
  public editedComponent: Component;

  constructor() { }

  ngOnInit() {
  }

  public _onRemove() {
    this.onRemove.emit(this.editedComponent);
  }

  public _onSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form);
    }
  }
}
