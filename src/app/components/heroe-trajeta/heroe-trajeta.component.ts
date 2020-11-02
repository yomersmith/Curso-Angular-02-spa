import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-trajeta',
  templateUrl: './heroe-trajeta.component.html'
})

export class HeroeTrajetaComponent implements OnInit {
 
  @Input() heroeU:any = {};
  @Input() index: number;

 @Output() heroSeleccionado: EventEmitter<number>;

  constructor(public _router: Router) { 
    this.heroSeleccionado = new EventEmitter();
  }
      

  ngOnInit(): void {
  
  }
  verHeroeU (){
    //this._router.navigate(['/heroe',this.index]);
    this.heroSeleccionado.emit( this.index );
  }
    

}
