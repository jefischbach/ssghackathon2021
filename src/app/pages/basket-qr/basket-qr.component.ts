import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { BasketRight } from '../../interfaces/basket-right';

@Component({
  selector: 'app-basket-qr',
  templateUrl: './basket-qr.component.html',
  styleUrls: ['./basket-qr.component.scss'],
})
export class BasketQRComponent implements OnInit {

  basketRight: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("assets/data/users-data.json").subscribe((data: any) => {
      this.basketRight = JSON.stringify(data.basketRight);
    });
  }
}
