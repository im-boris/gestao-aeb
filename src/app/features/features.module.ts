import { NgModule}  from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { MeetingRoutingModule } from './meeting/meeting-routing.module';

@NgModule({
  declarations: [],
  imports: [
    FeaturesRoutingModule,
    MeetingRoutingModule,
  ],
  exports: []
})
export class FeaturesModule {}
