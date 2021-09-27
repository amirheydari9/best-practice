import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreloadComponent} from './preload.component';


const routes: Routes = [
  {
    path: '',
    component: PreloadComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadRoutingModule {
}
