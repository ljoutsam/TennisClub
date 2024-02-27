import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {path:'home', component: HomeComponent,title:"Accueil"},
    /*{ path: 'login', component: LoginComponent },
    { path: 'subscription', component: SubscriptionComponent },
    { path: 'reservation', component: ReservationComponent },*/
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {
        path: '',
        loadChildren: () => import('./shared/shared.module')
          .then(mod => mod.SharedModule)
      },
      {
        path: '',
        loadChildren: () => import('./authentification/authentification.module')
          .then(mod => mod.AuthentificationModule)
      },
];
