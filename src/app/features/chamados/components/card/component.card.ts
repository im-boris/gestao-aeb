import { Component, Input } from '@angular/core';
import { Chamado } from '../../models/chamado';

@Component({
    selector: 'component-card',
    templateUrl: './component.card.html',
    styleUrls: ['./component.card.scss']
})
export class ComponentCard {
    
    @Input() chamado: Chamado = {};

}