import { Component, Input, OnInit } from '@angular/core';
import { MeetingService } from '../../meeting.service';
import { Agendamento } from '../../models/agendamento';

@Component({
    selector: 'container-reunioes-agendadas',
    templateUrl: './container.reunioes-agendadas.html',
    styleUrls: ['./container.reunioes-agendadas.scss']
})
export class ContainerReunioesAgendadas implements OnInit {
    
    @Input() id: number = 0;
    listaAgendamentos: Agendamento[] = [];

    constructor(private service: MeetingService) {}

    ngOnInit(): void {
        this.listaAgendamentos = this.service.getAgendamentoByIdLocal(this.id);
    }

}