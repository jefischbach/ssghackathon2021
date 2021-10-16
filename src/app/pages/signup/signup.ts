import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {
  signup: UserOptions = { username: '', password: '' } as UserOptions;
  submitted = false;
  public angForm: FormGroup;

  constructor(
    public router: Router,
    public userData: UserData,
    private fb: FormBuilder,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.angForm = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email: [''],
      phone: [''],
      nbPersons: ['',Validators.required],
      right: ['',Validators.required],
      centre: [''],
      contact: ['']

   });
  }

  onSignup(form: NgForm) {
    this.submitted = true;
    this.angForm.get('nbPersons').hasError('required')
    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Utilisateur créé',
      color: "success",
      duration: 2000
    });
    toast.present();
  }

  save() {
    
    this.angForm.setValue({
      firstName : '',
      lastName : '',
      email: '',
      phone: '',
      nbPersons: '',
      right: '',
      centre: '',
      contact: ''
    });

    this.angForm.markAsPristine();
    this.angForm.markAsUntouched();

    this.presentToast();
  }

}
