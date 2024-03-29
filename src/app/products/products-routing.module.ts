import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path:'',
    component:ProductsComponent,
    children:[
      {
        path:'details/:id',
        component:DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
