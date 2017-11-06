import { FormSelectOption } from './form-select-option.interface';

export interface FormInput {
  type: string;
  placeholder: string;
  formControlName: string;
  options?: FormSelectOption[];
}
