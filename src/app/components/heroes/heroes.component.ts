import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroess:Heroe[] = [];
  constructor(private _heroesService:HeroesService,
              private routerr:Router) { 
    //console.log('Constructor...');
    
  }

  ngOnInit() {
    this.heroess = this._heroesService.getHeroes();
    //console.log(this.heroess);
    
  }

  verHeroe(ind: Number){
    this.routerr.navigate(['/heroe',ind]);
    

  }

}
