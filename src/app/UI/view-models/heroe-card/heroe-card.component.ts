import { Component, OnInit } from '@angular/core';
import { GetHeroesUseCase } from 'src/app/domain/usecase/heroe/get-heroes-use-case';
import { GetHeroeUseCase } from '../../../domain/usecase/heroe/get-heroe-use-case';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {

  constructor(private _getHeroeUseCase: GetHeroeUseCase,
              private _getHeroesUseCase: GetHeroesUseCase) { }

  response$;
  dato$;

  termino: string = '';
  lista: any[] = [];

  heroe = {};

  ngOnInit(): void {
    // this.iniciar();
    this.init();
  }

  iniciar(dato: string){ 
    this._getHeroeUseCase.getHeroeById(dato)
    .subscribe( dato => {
      //this.lista.push(dato);
      console.log(dato);
      //console.log(this.lista);
      this.heroe = dato;   
    });
  }

  ejecutar(){
    this.iniciar(this.termino);
  }

  init() {
    this._getHeroesUseCase.getHeroes()
        .subscribe( data => {
          console.log(data);
          this.lista = data;      
        });
  }

}
