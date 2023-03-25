import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ChamadosRoutingModule } from './chamados-routing.module';
import { ComponentCard } from './components/card/component.card';
import { ContainerHeader } from './containers/header/container.header';
import { ComponentPainelCards } from './containers/painel-cards/container.painel-cards';
import { PageListChamados } from './pages/list/page.list.chamados';


@NgModule({
  declarations: [PageListChamados,
                 ContainerHeader,
                 ComponentPainelCards,
                 ComponentCard],
                 
  imports: [SharedModule, ChamadosRoutingModule]
})
export class ChamadosModule {}
