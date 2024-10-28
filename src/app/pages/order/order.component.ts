import { Component } from '@angular/core';
import { IProductItem, IProductsResponse } from '../../models/dummy-get-all-products.response';
import { HttpClient } from '@angular/common/http';
import { OrderItemComponent } from './order-item/order-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [OrderItemComponent, NgFor],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  productList: {
    id: number,
    title: string,
    imgUrl: string,
    description: string,
    price: number,
    discount: number
  }[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get<IProductsResponse>('https://dummyjson.com/products').subscribe({
      next: (res) => {
        console.log({res})
        if (res?.products?.length) {
          this.productList = res.products.map((x) => ({
            id: x.id,
            title: x.title,
            imgUrl: x.images[0] || '',
            description: x.description,
            price: x.price,
            discount: x.discountPercentage
          }));

          console.log({ p: this.productList})
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
