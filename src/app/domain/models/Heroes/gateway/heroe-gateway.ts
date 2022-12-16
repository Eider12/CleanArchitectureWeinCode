import { Observable } from 'rxjs';
import { Heroe } from '../heroe';


export abstract class HeroeGateway {
    abstract getByID(id: String): Observable<Heroe>;
}