import { Injectable } from '@angular/core';
import { HeroeGateway } from 'src/app/domain/models/Heroes/gateway/heroe-gateway';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../../../domain/models/Heroes/heroe';


@Injectable({
  providedIn: 'root'
})

export class HeroeApiService extends HeroeGateway {

  // private _url = 'http://localhost:3000/heroes/dc-batman';
  private _url = 'http://localhost:3000/heroes/';

  constructor( private http: HttpClient) {super();}

  getByID( id: String): Observable<Heroe> {
    return this.http.get<Heroe>(`${this._url}${id}`);
  }
  
}
