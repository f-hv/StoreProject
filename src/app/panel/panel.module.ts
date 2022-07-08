import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    CartComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    RouterModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PanelModule { }
