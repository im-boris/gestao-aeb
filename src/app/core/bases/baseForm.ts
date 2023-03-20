import { FormBuilder, FormGroup, ValidatorFn } from "@angular/forms";
import { BaseModel } from "./baseModel";

export abstract class BaseForm<ID , T extends BaseModel<ID>> {

    _form!: FormGroup;
    _initialState: T;

    constructor(obj: T) {
        this._form = this.create(null, obj);
        this._initialState = this.values();
    }

    create(formBuilder: FormBuilder | null, obj: T): FormGroup<{}> {
        if(!formBuilder) {
            formBuilder = new FormBuilder();   
        }

        const formGroup = formBuilder.group({});
        Object.keys(obj).forEach(key => {
            const value = obj[key as keyof T];
            if (Array.isArray(value)) {
                formGroup.addControl(key, formBuilder?.array([...value])!);

            } else if (value instanceof Object) {
                formGroup.addControl(key, this.create(formBuilder, value as keyof object));

            } else {
                formGroup.addControl(key, formBuilder!.control(value, {updateOn:"blur"}));
            }
            
        });
        return formGroup;
    }

    getInstance(): FormGroup {
        return this._form;
    }

    isAllFieldsValid(): boolean {
        return this._form.valid;
    }

    values(): T {
        return this._form.value;
    }

    reset(state: T): void {
        this._form.reset(state);
    }

    setInputValue(inputName: string, value: any): void {
        this._form.patchValue({[inputName]: value});
    }

    setFieldValidators(inputName: string, validators: ValidatorFn[] | ValidatorFn): void {
        this._form.controls[`${inputName}`].setValidators(validators);
        this._form.controls[`${inputName}`].updateValueAndValidity();
    }

    removeFieldValidators(inputName: string, validators: ValidatorFn[] | ValidatorFn): void {
        this._form.controls[`${inputName}`].removeValidators(validators);
        this._form.controls[`${inputName}`].updateValueAndValidity();
    }

    clearFieldValidators(inputName: string): void {
        this._form.controls[`${inputName}`].clearValidators();
        this._form.controls[`${inputName}`].updateValueAndValidity();
    }
    
}
