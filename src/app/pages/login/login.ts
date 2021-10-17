import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { Storage } from '@ionic/storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ToastController } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements AfterViewInit {
  login: UserOptions = { username: '', password: '' } as UserOptions;
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private storage: Storage,
    private faio: FingerprintAIO,
    public toastController: ToastController,
    public afDB: AngularFireDatabase,
    public http: HttpClient

  ) { }

  ngAfterViewInit(): void {
    this.userData.getUsername().then(un => {
      if (un) {
        this.login.username = un;
        this.faio.isAvailable().then(available => {
          if (available) {
            this.faio.show({
              clientId: 'Collect\'eat',
              clientSecret: 'password', //Only necessary for Android
              disableBackup:true,  //Only for Android(optional)
            }).then(r => {
              this.http.get("assets/data/users-data.json").subscribe((elem: any) => {
                let users =  elem.users.filter(el => el.username == this.login.username);
         
                 if(users && users.length > 0) {
                   this.userData.login(this.login.username);
                   this.storage.set("User",users[0]);
                   this.storage.set("fingerprintauth", true);
                   let role = users[0].role;
                   if('user' === role) {
                    this.storage.get('ion_did_tutorial').then(el =>
                    {
                      if(el) {
                        this.router.navigateByUrl('/app/tabs/home');
                      } else {
                        this.router.navigateByUrl('/tutorial');    
                      }    
                    });
                  } else if ('mairie' === role) {           
                    this.router.navigateByUrl('/app/tabs/home-mairie');
                  } else if ("assos" === role) {
                    this.router.navigateByUrl('/app/tabs/home-assos');
                  }
                 }
               }) 
            });
          }
        });
      }
    });
  }

  async onLogin(form: NgForm) {
    this.submitted = true;

    const toast = await this.toastController.create({
      message: 'Bienvenue ' + this.login.username + ' !',
      duration: 2000
    });

    if (form.valid) {
      this.http.get("assets/data/users-data.json").subscribe((elem: any) => {
       let users =  elem.users.filter(el => el.username == this.login.username);


        if(users && users.length > 0) {
          this.userData.login(this.login.username);
          this.storage.set("User",users[0]);
          let role = users[0].role;
          if('user' === role) {
            this.storage.get('ion_did_tutorial').then(el =>
            {
              if(el) {
                this.router.navigateByUrl('/app/tabs/home');
              } else {
                this.router.navigateByUrl('/tutorial');

              }

            });
          } else if ('mairie' === role) {           
            this.router.navigateByUrl('/app/tabs/home-mairie');
          } else if ("assos" === role) {
            this.router.navigateByUrl('/app/tabs/home-assos');
          }
          toast.present();
        }
      }) 

    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
