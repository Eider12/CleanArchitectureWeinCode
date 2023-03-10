import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AlbumGateway } from '../../models/Album/gateway/album-gateway';
import { Album } from '../../models/Album/album';

// import {AlbumGateway} from '../models/Album/gateway/album-gateway';
// import { Album } from '../models/Album/album';

@Injectable({
  providedIn: 'root'
})

export class GetAlbumUseCases {

  constructor( private _albumGateWay: AlbumGateway) {}  

  getAlbumById (id: String) : Observable <Album> {
    return this._albumGateWay.getByID(id);
  }

  getAllAlbum () : Observable <Array<Album>> {
    return this._albumGateWay.getAll();
  }

}



    //TODO: En este sitio podríamos manejar las configuraciones 
    //en cache