import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import("./products/products.module")
      .then(m => m.ProductsModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import("./login/login.module")
  //     .then(m => m.LoginModule)
  // },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
