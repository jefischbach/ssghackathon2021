import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BasketQRRoutingModule } from './basket-qr-routing.module';
import { BasketQRComponent } from './basket-qr.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BasketQRRoutingModule,
    QRCodeModule
  ],
  declarations: [BasketQRComponent],
  entryComponents: [BasketQRComponent],
})
export class BasketQRModule {}
