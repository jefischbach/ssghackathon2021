import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { BasketScanRoutingModule } from './basket-scan-routing.module';
import { BasketScanComponent } from './basket-scan.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BasketScanRoutingModule,
    QRCodeModule,
  ],
  declarations: [BasketScanComponent],
  entryComponents: [BasketScanComponent],
})
export class BasketScanModule {}
