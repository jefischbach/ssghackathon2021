import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { HomePage } from '../home/home';
import { HomeMairiePage } from '../home-mairie/home-mairie.page';
import { HomeAssosPage } from '../home-assos/home-assos.page';
import { SignupPage } from '../signup/signup';
import { BasketCreationPage } from '../basket-creation/basket-creation.page';
 

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            component: HomePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'allergies',
        children: [
          {
            path: '',
            loadChildren: () => import('../allergies/allergies.module').then(m => m.AllergiesModule)
          }
        ]
      },
      {
        path: 'basket-qr',
        children: [
          {
            path: '',
            loadChildren: () => import('../basket-qr/basket-qr.module').then(m => m.BasketQRModule)
          }
        ]
      },
      {
        path: 'filesafe',
        children: [
          {
            path: '',
            loadChildren: () => import('../filesafe/filesafe.module').then(m => m.FilesafeModule)
          }
        ]
      },
      {

        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../account/account.module').then(m => m.AccountModule)
          }
        ]

      },{
        
        path: 'home-mairie',
        children: [
          {
            path: '',
            component: HomeMairiePage,
          }
        ]
      },
      {        
        path: 'home-assos',
        children: [
          {
            path: '',
            component: HomeAssosPage,
          }
        ]
      },
      {
        path: 'signup',
        children: [
          {
            path: '',
            component: SignupPage,
          }
        ]
      },
      {
        path: 'basket-creation',
        children: [
          {
            path: '',
            component: BasketCreationPage,
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

