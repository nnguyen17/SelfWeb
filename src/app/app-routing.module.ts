import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGuard } from 'src/guard/gallery.guard';
import { TokenInterceptor } from 'src/interceptor/token.interceptor';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MessageComponent } from './message/message.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'update', component:UpdateComponent},
  {path:'gallery', component:GalleryComponent, canActivate:[GalleryGuard]},
  {path:'about', component:AboutComponent},
  {path:'message', component:MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}
  ]
  
})
export class AppRoutingModule { }