import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeterminoComponent } from './components/heroetermino/heroetermino.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'heroeXtermino/:termino', component: HeroeterminoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



