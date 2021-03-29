import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product, ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'nga-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.products$ = route.queryParams.pipe(
      switchMap(queryParams => this.productService.search(queryParams)));
  }

  ngOnInit(): void {
  }

}
