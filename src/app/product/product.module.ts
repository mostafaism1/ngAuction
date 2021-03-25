import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './product.component';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class ProductModule { }
