import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'meeting',
    loadChildren: () =>
      import('./meeting/meeting.module').then(
        (m) => m.MeetingModule
      )
  },
  {
    path: 'chamados',
    loadChildren: () =>
      import('./chamados/chamados.module').then(
        (m) => m.ChamadosModule
      )
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
