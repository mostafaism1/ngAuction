import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../shared/services/product.service';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly products$: Observable<Product[]>;

  constructor(private media: MediaObserver, private productService: ProductService) {

    this.products$ = this.productService.getAll();

  }

  ngOnInit(): void {
  }

}
