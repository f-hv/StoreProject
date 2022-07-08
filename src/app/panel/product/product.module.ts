import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { RouterModule } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListProductComponent, DetailsProductComponent],
  imports: [CommonModule, ProductRoutingModule, RouterModule, SharedModule],
})
export class ProductModule {}
