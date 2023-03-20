import { ControlValueAccessor } from "@angular/forms";

export abstract class BaseAccessor implements ControlValueAccessor {
    
    innerValue: any;

    get value(){
        return this.innerValue;
    }
  
    set value(val: any) {
        if(val !== this.innerValue){
            this.innerValue = val;
            this.onChangeCb(val);
        }
    }

    onChangeCb: (_: any) => void = () => {};

    onTouchedCb: (_: any) => void = () => {};

    writeValue(val: any): void { this.value = val }

    registerOnChange(fn: any): void { this.onChangeCb = fn }

    registerOnTouched(fn: any): void { this.onTouchedCb = fn }

}