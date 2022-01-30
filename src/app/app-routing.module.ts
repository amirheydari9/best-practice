import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CustomPreloadStrategyService} from './custom-preload-strategy.service';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  {
    path: 'lazy',
    data: {preload: true, loadAfterSeconds: 10},
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    // ماژول هایی که canLoad دارند preload نمی شوند
    // مقاله کامل reload
    // https://blog.bitsrc.io/preloading-strategies-boost-up-angular-app-loading-time-ffb19da63155
    path: 'dialog',
    data: {preload: true, loadAfterSeconds: 3},
    canLoad: [AuthGuardService],
    loadChildren: () => import('./dialog/dialog-wrapper.module').then(m => m.DialogWrapperModule)
  },
  {
    path: 'preload',
    loadChildren: () => import('./preload/preload.module').then(m => m.PreloadModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: 'datepicker',
    loadChildren: () => import('./datepicker/datepicker.module').then(m => m.DatepickerModule)
  },
  {
    path: 'joke',
    loadChildren: () => import('./joke/joke.module').then(m => m.JokeModule)
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
