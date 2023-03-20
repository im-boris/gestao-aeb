import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ContainerLayoutComponent } from './shared/layout/containers/container.layout.component';

const routes: Routes = [
  {
    path: 'gestao-aeb',
    component: ContainerLayoutComponent,
    children: [
      { 
        path: 'features', 
        loadChildren: () => 
          import('./features/features.module').then(
            m => m.FeaturesModule
          )
      }
    ]
  },
  {
    path: '',
    redirectTo: '/gestao-aeb',
    pathMatch: 'full'
  },
  {
    path: 'page-not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
