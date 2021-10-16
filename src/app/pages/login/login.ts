import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { Storage } from '@ionic/storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

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
  ) { }

  ngAfterViewInit(): void {
    this.userData.getUsername().then(un => {
      if (un) {
        this.login.username = un;
        this.faio.isAvailable().then(available => {
          if (available) {
            this.faio.show({
              clientId: 'Omnibouffe',
              clientSecret: 'password', //Only necessary for Android
              disableBackup:true,  //Only for Android(optional)
            }).then(r => {
              this.userData.login(this.login.username);
              this.router.navigateByUrl('/app/tabs/schedule');
            });
          }
        });
      }
    });
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
