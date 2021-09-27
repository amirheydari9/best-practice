import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CustomPreloadStrategyService} from './custom-preload-strategy.service';

const routes: Routes = [
  {
    path: 'lazy',
    data: {preload: true, loadAfterSeconds: 10},
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'dialog',
    data: {preload: true, loadAfterSeconds: 3},
    loadChildren: () => import('./dialog/dialog-wrapper.module').then(m => m.DialogWrapperModule)
  },
  {
    path: 'preload',
    loadChildren: () => import('./preload/preload.module').then(m => m.PreloadModule)
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
