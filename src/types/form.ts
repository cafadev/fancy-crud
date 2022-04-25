import { Observable, SubjectLike } from 'rxjs'
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'vue';

export enum FormModes {
  CREATE_MODE,
  UPDATE_MODE
}

export interface Button extends ButtonHTMLAttributes {
  label?: { create?: string; update?: string};
  loading?: boolean;
  onClick?: (payload?: MouseEvent) => void
}

export interface Buttons {
  main?: Button;
  aux?: Button;
}

export interface NormalizedButtons extends Required<Buttons> {}

export interface FieldStructure extends InputHTMLAttributes {
  label?: string;
  multiple?: boolean;
  valueString?: string | null;
  url?: string;
  showPassword?: boolean;
  optionLabel?: string;
  optionValue?: string;
  modelKey?: string;
  modelValue?: unknown;
  fileUrl?: string;
  wrapClass?: string;
  class?: string;
  wrapCols?: string;
  type?: string;
  errors?: string[];
  filterParams?: unknown;
  options?: any[];
  ref?: unknown;
  createOnly?: boolean;
  updateOnly?: boolean;
  hidden?: boolean;
  hintText?: string;
  table?: {
    label?: string;
    value?: string;
    field?: (row: unknown, index: number) => unknown;
    format?: (value: unknown) => unknown;
    exclude?: boolean
    allowCheckbox?: boolean
    allowImagePreview?: boolean
  };
  [key: string]: unknown;
}

export interface NormalizedFieldStructure extends FieldStructure {
  name: string;
  type: string;
  class: string;
  modelKey: string;
  modelValue: unknown;
  ref: any;
  // RenderField: any;
  errors: string[];
  rules: Array<(value: any) => string | boolean> | never[];
  onInput: (e: Event) => void
}

export interface Actions {
  [k: string]: {
    onInput?: null | ((field: NormalizedFieldStructure) => (e: Event) => void);
    onChange?: null | ((field: NormalizedFieldStructure) => (e: Event) => void);
    onFocus?: null | ((field: NormalizedFieldStructure) => (e: Event) => void);
  }
}

export interface Fields {
  [key: string]: FieldStructure;
}

export interface NormalizedFields {
  [key: string]: NormalizedFieldStructure;
}

export interface Title {
  create?: string;
  update?: string;
}

export interface Settings {
  url: string;
  buttons?: NormalizedButtons;
  mode?: FormModes;
  title?: string | Title
  lookupField?: string
  isValid?: boolean
}

export interface NormalizedSettings extends Settings {
  url: string;
  buttons: Required<Buttons>;
  mode: FormModes;
  title: string | Title
  lookupField: string
}

export interface FieldWatcher {
  value: unknown;
  oldValue: unknown;
}

export interface ObservableFieldWatcher {
  [key: string]: Observable<FieldWatcher>
}

export interface FormEmitter {
  generalErrors: SubjectLike<unknown>,
  notifications: SubjectLike<unknown>
  isFormValid: SubjectLike<boolean>,
  fields: {
    [key: string]: ObservableFieldWatcher
  }
}

export interface Form {
  id: string;
  fields: NormalizedFields;
  settings: NormalizedSettings;
  generalError?: string;
  record?: IFormRecord
}

export interface IFormRecord {
  [key: string]: any;
}

export interface CreateForm {
  id: string;
  fields: Fields;
  settings: Settings;
  record?: IFormRecord;
}
