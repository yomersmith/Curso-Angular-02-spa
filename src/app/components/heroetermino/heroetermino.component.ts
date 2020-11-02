import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-heroetermino',
  templateUrl: './heroetermino.component.html'
})
export class HeroeterminoComponent implements OnInit{

  heroeTermino: Heroe[] =[];
  termino: string;
  constructor(private _heroeServie: HeroesService,
              private _activateRoute: ActivatedRoute,
              private _router: Router

  ) {   
  }
  
  ngOnInit(): void {
    this._activateRoute.params.subscribe(param => {
      this.termino = param['termino'];
      this.heroeTermino = this._heroeServie.buscarHeroe(param['termino']);
      console.log(this.heroeTermino);
      
      });
    

  }
  verHeroe(ind: Number){
    this._router.navigate(['/heroe',ind]);
    
  }

}
