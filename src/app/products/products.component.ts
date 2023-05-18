import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  public products: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.httpClient.get('http://localhost:8888/INVENTORY-SERVICE/products')
      .subscribe({
      next: data => this.products = data,
      error: err => console.error('There was an error!', err)
    })
  }
}
