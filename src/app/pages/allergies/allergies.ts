import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides, ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-allergies',
  templateUrl: 'allergies.html',
  styleUrls: ['./allergies.scss'],
})
export class AllergiesPage {
  showSkip = true;

  allergies = [
    {
      name: 'Lait',
      enabled: false,
    },
    {
      name: 'Oeufs',
      enabled: false,
    },
    {
      name: 'Poisson',
      enabled: false,
    },
    {
      name: 'Fruits de mer',
      enabled: false,
    },
    {
      name: 'Noix',
      enabled: false,
    },
    {
      name: 'Cacahuètes',
      enabled: false,
    },
    {
      name: 'Blé',
      enabled: false,
    },
    {
      name: 'Soja',
      enabled: false,
    }
  ];
  allergiesChanged = false;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    public toastController: ToastController
  ) {}

  async save() {
    this.allergiesChanged = false;
    const toast = await this.toastController.create({
      message: 'Vos allergies ont été mises à jour.',
      duration: 2000
    });
    toast.present();
  }
}
 