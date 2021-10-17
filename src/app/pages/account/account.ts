import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UserInfo } from 'firebase';
import { UserOptions } from '../../interfaces/user-options';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit, OnInit {
  username: string;
  testemail: any;
  userlist$: Observable<UserOptions[]>;
  user: UserOptions;
  isEdition = false;
  public angForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    public afDB: AngularFireDatabase,
    private storage: Storage,
    private fb: FormBuilder,
    public toastController: ToastController
  ) { }



  ngOnInit() {
    this.storage.get("User").then(value => {
      this.user = value;
      this.angForm = this.fb.group({
        fullName : [this.user.firstName + ' ' +this.user.lastName],
        email: [''],
        phone: [''],
        centre: [this.user.distributionCenter.name],
        contact: [this.user.contactSocial.firstName + ' ' + this.user.contactSocial.firstName]
  
     });
    });

  }

  ngAfterViewInit() {
    this.getUsername();
    this
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
    console.log("testsupport");
  }

  test() {
    console.log("test");
    this.afDB.list("/User").push({
      email: 'pouglou.denis@mail.com'
    });

    
  }

  switchToEdition() {
    this.isEdition = true;

   this.angForm.controls.contact.disable();
   this.angForm.controls.fullName.disable();
   this.angForm.controls.centre.disable();

  }

  save() {
    
    let newEmail = this.angForm.controls.email.value;
    let newPhone = this.angForm.controls.phone.value;

    if(newEmail) {
      this.user.email = newEmail;
    }

    if(newPhone) {
      this.user.phoneNumber = newPhone;
    }

    this.storage.set("User",this.user);

    this.isEdition = false;

    this.presentToast();

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Vos données ont bien été sauvegardées',
      color: "success",
      duration: 2000
    });
    toast.present();
  }

  redirectToAllergies() {
    this.router.navigateByUrl('/app/tabs/allergies');
  }

  clearCache() {
    this.storage.remove('ion_did_tutorial');
  }

}
