import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRCodeModule } from 'angularx-qrcode';
import { BasketRight } from '../../interfaces/basket-right';

@Component({
  selector: 'app-basket-qr',
  templateUrl: './basket-qr.component.html',
  styleUrls: ['./basket-qr.component.scss'],
})
export class BasketQRComponent implements OnInit {

  basketRight: string;
  qrData: any;

  constructor(private http: HttpClient,
    private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.http.get("assets/data/users-data.json").subscribe((data: any) => {
      this.basketRight = JSON.stringify(data.basketRight);
      this.qrData = this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, data);
    });
  }
}
