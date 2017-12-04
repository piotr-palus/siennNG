import {Component, Input, OnInit} from '@angular/core';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products;
  sortedData = [];

  produc = [
    {productID: 'Frozen yogurt', name: '159', price: '6', description: '24'},
    {productID: 'Ice cream sandwich', name: '237', price: '9', description: '37'},
    {productID: 'Eclair', name: '262', price: '16', description: '24'},
    {productID: 'Cupcake', name: '305', price: '4', description: '67'},
    {productID: 'Gingerbread', name: '356', price: '16', description: '49'},
  ];

  constructor() {
    this.sortedData = this.produc.slice();
  }

  ngOnInit() {
  }


  sortData(sort: Sort) {
    const data = this.produc.slice();
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
