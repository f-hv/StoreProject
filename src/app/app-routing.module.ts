import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'panel', 
    loadChildren : () => import( "./panel/panel.module")
    .then ( m=> m.PanelModule)    
  },
  {
    path:'',
    redirectTo : 'panel',
    pathMatch :'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
