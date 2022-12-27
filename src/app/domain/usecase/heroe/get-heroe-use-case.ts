import { HeroeGateway } from "../../models/Heroes/gateway/heroe-gateway";
import { Observable } from 'rxjs';
import { Heroe } from '../../models/Heroes/heroe';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })


export class GetHeroeUseCase {

    constructor( private _heroeGateway: HeroeGateway) {}

    getHeroeById( id: String): Observable <Heroe> {
        return this._heroeGateway.getByID(id);
    }

}