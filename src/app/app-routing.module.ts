import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'AboutRoute', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'GalleryRoute', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) }, { path: 'UpdateRoute', loadChildren: () => import('./update/update.module').then(m => m.UpdateModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }