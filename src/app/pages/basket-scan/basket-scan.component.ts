import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BasketRight } from '../../interfaces/basket-right';

@Component({
  selector: 'app-basket-scan',
  templateUrl: './basket-scan.component.html',
  styleUrls: ['./basket-scan.component.scss'],
})
export class BasketScanComponent {

  basketRight: BasketRight;
  time: any;
  scanned = 0;

  constructor(private http: HttpClient,
    private barcodeScanner: BarcodeScanner) { }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scanned += 1;
      console.log('$$$$$$$scan : '+this.scanned)
      if (this.scanned < 2) {
        this.time = new Date(Date.now()); 
      }
      this.basketRight = JSON.parse(barcodeData.text) as BasketRight;
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
