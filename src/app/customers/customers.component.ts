import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  public customers: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers() {
    this.httpClient.get(`http://localhost:8888/CUSTOMER-SERVICE/customers`)
      .subscribe({
        next: data => this.customers = data,
        error: error => console.error('There was an error!', error)
      })
  }
}
