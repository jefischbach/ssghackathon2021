import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSelect, ToastController } from '@ionic/angular';
import { UserOptions } from '../../interfaces/user-options';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'app-basket-creation',
  templateUrl: './basket-creation.page.html',
  styleUrls: ['./basket-creation.page.scss'],
})
export class BasketCreationPage implements OnInit {
  @ViewChild('selectedUser', { static: false }) projectSelect: IonSelect;
  public angForm: FormGroup;
  public users: any[];
  userFavFoods = ['alpha', 'bravo'];
 // public allergies = ['Lait','Oeufs','Poisson','Fruits de mer','Noix','Cacahuètes','Blé','Soja'];
  public allergies = [
    {
      name: 'Lait'
    },
    {
      name: 'Oeufs'
    },
    {
      name: 'Poisson'
    },
    {
      name: 'Fruits de mer'
    },
    {
      name: 'Noix'
    },
    {
      name: 'Cacahuètes'
    },
    {
      name: 'Blé'
    },
    {
      name: 'Soja'
    }
  ];

  selectedAllergies: any[];
  
  constructor(
    public router: Router,
    public userData: UserData,
    private fb: FormBuilder,
    public toastController: ToastController,
    public http: HttpClient
  ) {}

  ngOnInit() {   
    this.http.get("assets/data/users-data.json").subscribe((elem: any) => {
      this.users =  elem.users.filter(el => el.role === 'user');
      console.log(this.users);
    });
    this.angForm = this.fb.group({
      name : ['',Validators.required],
      description : ['',Validators.required],
      allergies : [''],
      users : ['']
   });

  } 


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Utilisateur créé',
      color: "success",
      duration: 2000
    });
    toast.present();
  }

  resetUsers() {
    this.angForm.patchValue({
      users: ''
    });
    this.selectedAllergies = this.angForm.controls.allergies.value;
    this.http.get("assets/data/users-data.json").subscribe((elem: any) => {
      this.users =  elem.users.filter(el => {el.role === 'user' && el.allergies.filter(al => !(al in this.selectedAllergies))});
      console.log(this.users);
    });

  }

  save() {
    
  
  }
}
