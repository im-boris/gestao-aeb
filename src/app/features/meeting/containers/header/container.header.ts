import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ComponentAgendamento } from '../../components/agendamento/component.agendamento';
import { MeetingService } from '../../meeting.service';

@Component({
    selector: 'container-header',
    templateUrl: './container.header.html',
    styleUrls: ['./container.header.scss'],
    providers: [DialogService]
})
export class ContainerHeader {

    constructor(public dialogService: DialogService, private service: MeetingService) {}
    
    openModal(): void {
        this.service.getLocaisDisponiveis()
        .subscribe(locais => {
            const modal = this.dialogService.open(ComponentAgendamento, {
                header: 'Agendar Reunião',
                data: {locais}
            });
    
            modal.onClose.subscribe((dados: any) => {
                this.service.addAgendamento(dados);
            });
        });

    }

}