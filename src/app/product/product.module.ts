import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class ProductModule { }
