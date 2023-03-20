import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Local } from '../../models/local';

@Component({
    selector: 'component-card',
    templateUrl: './component.card.html',
    styleUrls: ['./component.card.scss']
})
export class ComponentCard {
    
    @Input() local: Local = {};
    @Output() detalha: EventEmitter<number> = new EventEmitter();

    detalhar(id: any) {
        this.detalha.emit(id);
    }

}