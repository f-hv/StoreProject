import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'list/:searcKey',
        component: ListProductComponent,
      },
      {
        path: 'list',
        component: ListProductComponent,
      },
      {
        path: 'details/:id',
        component: DetailsProductComponent,
      },
      // {
      //   path:'',
      //   redirectTo:'list',
      //   pathMatch:'full'
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
