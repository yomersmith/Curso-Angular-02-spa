import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor( private _router: Router) { }

  buscarHeroe (termino: string) {
    //console.log(termino);  
    this._router.navigate(['/heroeXtermino', termino]);


  }

}
