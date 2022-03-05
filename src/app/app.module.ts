import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LatestComponent } from './components/welcome/sub-comp/latest/latest.component';
import { NewAlbumComponent } from './components/welcome/sub-comp/new-album/new-album.component';
import { NewButtonComponent } from './components/welcome/sub-comp/new-button/new-button.component';
import { SectComponent } from './components/welcome/sub-comp/sect/sect.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TheBandComponent } from './components/the-band/the-band.component';
import { MediaComponent } from './components/media/media.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    WelcomeComponent,
    TheBandComponent,
    MediaComponent
    SectComponent,
    LatestComponent,
    NewAlbumComponent,
    NewButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
