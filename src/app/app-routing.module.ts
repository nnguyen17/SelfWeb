import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MessageComponent } from './message/message.component';
import { UpdateComponent } from './update/update.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component:SignUpComponent},
  {path:'update', component:UpdateComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'about', component:AboutComponent},
  {path:'message', component:MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }