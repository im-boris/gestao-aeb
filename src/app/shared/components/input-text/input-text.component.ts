import { Component, EventEmitter, forwardRef, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseAccessor } from 'src/app/core/bases/baseAccessor';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputTextComponent),
  multi: true
}

@Component({
  selector: 'input-text-component',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACESSOR],
})
export class InputTextComponent extends BaseAccessor {

  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() showClearButton: boolean = false;
  @Input() maxLength: number = 40;
  @Input() templateClearButton: TemplateRef<HTMLElement> | undefined;
  @Input() templateStringLength: TemplateRef<HTMLElement> | undefined;
  @Output() enterKeyPress: EventEmitter<string> = new EventEmitter();

  pesquisar() {
      this.enterKeyPress.emit(this.value);
  }

}