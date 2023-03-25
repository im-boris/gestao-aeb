import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListChamados } from './pages/list/page.list.chamados';


const routes: Routes = [
  { 
    path: 'list', 
    component: PageListChamados,
  },
  // { 
  //   path: 'detalhar/:idLocal', 
  //   component: PageDetalharMeeting,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
