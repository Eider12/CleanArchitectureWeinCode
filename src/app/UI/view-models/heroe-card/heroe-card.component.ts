import { Component, OnInit } from '@angular/core';
import { GetHeroeUseCase } from '../../../domain/usecase/get-heroe-use-case';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {

  constructor(private _getHeroeUseCase: GetHeroeUseCase) { }

  response$;
  dato$;

  termino: string = '';
  lista: any[] = [];

  ngOnInit(): void {
    // this.iniciar();
  }

  iniciar(dato: string){
    this._getHeroeUseCase.getHeroeById(dato)
    .subscribe( dato => {

      this.lista.push(dato);
      console.log(dato);
      console.log(this.lista);
      
    });
  }

  ejecutar(){
    this.iniciar(this.termino)
  }

}
