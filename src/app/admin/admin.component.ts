import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  grosstotal: string;
  itemtotal: string;
  delivarycharges: string;
  product: string;
  quantity: string;
  constructor() { }

  ngOnInit() {
    debugger;
    var orders = JSON.parse(localStorage.getItem('userOrder'));
    this.grosstotal = orders.grossTotal;
    this.itemtotal = orders.itemsTotal;
    this.product = orders.items[0].productId;
    this.quantity = orders.items[0].quantity;
    this.delivarycharges = orders.deliveryTotal;

  }

}
