import { NgModule } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ContainerLayoutComponent } from './containers/container.layout.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    SideMenuComponent,
    ContainerLayoutComponent
  ],
  imports: [SharedModule]
})
export class LayoutModule { }
