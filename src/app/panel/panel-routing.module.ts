import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import("./product/product.module")
          .then(m => m.ProductModule)
      },
      {
        path: 'cart',
        loadChildren: () => import("./cart/cart.module")
          .then(m => m.CartModule)
      },
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
