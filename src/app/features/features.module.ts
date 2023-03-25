import { NgModule}  from '@angular/core';
import { ChamadosModule } from './chamados/chamados.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { MeetingRoutingModule } from './meeting/meeting-routing.module';

@NgModule({
  declarations: [],
  imports: [
    FeaturesRoutingModule,
    MeetingRoutingModule,
    ChamadosModule,
  ],
  exports: []
})
export class FeaturesModule {}
