import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input() products;
  sortedData = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.products.length) {
      this.sortedData = this.products.slice();
    }
  }


  sortData(sort: Sort) {
    console.log(sort);
    const data = this.products.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'productID':
          return this.compare(a.productID, b.productID, isAsc);
        case 'name':
          return this.compare(+a.name, +b.name, isAsc);
        case 'price':
          return this.compare(+a.price, +b.price, isAsc);
        case 'description':
          return this.compare(+a.description, +b.description, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
