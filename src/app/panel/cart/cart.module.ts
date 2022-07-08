import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { FormCartComponent } from './form-cart/form-cart.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';


@NgModule({
  declarations: [
    FormCartComponent,
    CreateCartComponent,
    UpdateCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
