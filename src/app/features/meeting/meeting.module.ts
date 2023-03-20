import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ComponentAgendamento } from './components/agendamento/component.agendamento';
import { ComponentCard } from './components/card/component.card';
import { ContainerHeader } from './containers/header/container.header';
import { ComponentPainelCards } from './containers/painel-cards/container.painel-cards';
import { ContainerReunioesAgendadas } from './containers/reunioes-agendadas/container.reunioes-agendadas';
import { MeetingRoutingModule } from './meeting-routing.module';
import { PageDetalharMeeting } from './pages/detalhar/page.detalhar.meeting';
import { PageListMeeting } from './pages/list/page.list.meeting';

@NgModule({
  declarations: [PageListMeeting,
                 PageDetalharMeeting,
                 ContainerHeader, 
                 ComponentPainelCards,
                 ComponentAgendamento,
                 ContainerReunioesAgendadas,
                 ComponentCard],
                 
  imports: [SharedModule, MeetingRoutingModule]
})
export class MeetingModule {}
