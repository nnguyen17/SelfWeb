import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about/about.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { UpdateComponent } from './update/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
