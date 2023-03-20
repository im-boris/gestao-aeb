import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AgendamentoForm } from '../../models/agendamentoForm';
import { Local } from '../../models/local';
 
@Component({
    selector: 'component-agendamento',
    templateUrl: './component.agendamento.html',
    styleUrls: ['./component.agendamento.scss']
})
export class ComponentAgendamento implements OnInit {

    locais: Local[] = [];
    form: AgendamentoForm = new AgendamentoForm();

    constructor(public ref: DynamicDialogRef, public parametros: DynamicDialogConfig) {}

    ngOnInit(): void {
        this.locais = this.parametros.data.locais;
    }

    salvar(): void {
        this.ref.close(this.form.values);
    }

}