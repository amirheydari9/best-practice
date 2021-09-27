import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'dialog',
    loadChildren: () => import('./dialog/dialog-wrapper.module').then(m => m.DialogWrapperModule)
  },
  {
    path: 'preload',
    loadChildren: () => import('./preload/preload.module').then(m => m.PreloadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
