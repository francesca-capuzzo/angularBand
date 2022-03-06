import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TheBandComponent } from './components/the-band/the-band.component';
import { ToursComponent } from './components/tours/tours.component';
import { MediaComponent } from './components/media/media.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: WelcomeComponent },
  { path: 'theband', component: TheBandComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'media', component: MediaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
