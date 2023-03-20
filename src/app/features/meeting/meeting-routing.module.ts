import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetalharMeeting } from './pages/detalhar/page.detalhar.meeting';
import { PageListMeeting } from './pages/list/page.list.meeting';

const routes: Routes = [
  { 
    path: 'list', 
    component: PageListMeeting,
  },
  { 
    path: 'detalhar/:idLocal', 
    component: PageDetalharMeeting,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }
