import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

const firebaseConfig = {

  apiKey: "AIzaSyDqO7ZJV0prXdAb6zYOi-BbX6-PR_ltmh8",

  authDomain: "hackatonssg2021.firebaseapp.com",

  databaseURL: "https://hackatonssg2021-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "hackatonssg2021",

  storageBucket: "hackatonssg2021.appspot.com",

  messagingSenderId: "1061731853608",

  appId: "1:1061731853608:web:f923818760f173a20d1c1d"

};


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, FingerprintAIO],
  bootstrap: [AppComponent]
})
export class AppModule {}
