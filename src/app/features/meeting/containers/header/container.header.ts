import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ComponentAgendamento } from '../../components/agendamento/component.agendamento';
import { MeetingService } from '../../meeting.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'container-header',
    templateUrl: './container.header.html',
    styleUrls: ['./container.header.scss'],
    providers: [DialogService, MessageService]
})
export class ContainerHeader {

    constructor(public dialogService: DialogService, private service: MeetingService,
                private messageService: MessageService) {}
    
    openModal(): void {
        this.service.getLocaisDisponiveis()
        .subscribe(locais => {
            const modal = this.dialogService.open(ComponentAgendamento, {
                header: 'Agendar Reunião',
                data: {locais}
            });
    
            modal.onClose.subscribe((dados: any) => {
                if(dados) {
                    this.service.addAgendamento(dados);
                    this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Reunião agendada!'});
                }
            });
        });

    }

}