import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { Route, RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CategoriesComponent } from './categories/categories.component'


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: CategoriesComponent },
    ]
  }
];

@NgModule({
  declarations: [HomeComponent, ProductGridComponent, SearchResultsComponent, CategoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatGridListModule,
    MatTabsModule
  ]
})
export class HomeModule { }
