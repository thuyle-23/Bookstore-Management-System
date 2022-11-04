import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onestepcheckout',
  templateUrl: './onestepcheckout.component.html',
  styleUrls: ['./onestepcheckout.component.scss']
})
export class OnestepcheckoutComponent implements OnInit {
  shippingMethod: string;
  paymentMethod: string;

  constructor() { }

  ngOnInit(): void {
  }
  seasons: string[] = ['Giao hàng tiêu chuẩn'];
  payments: string[] = ['Ví ZaloPay', 'Ví ShopeePay', 'Ví Momo', 'ATM/Internet Banking', 'Visa/Master/JCB','Cash on Delivery']
}
