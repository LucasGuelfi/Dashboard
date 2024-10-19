import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly Dados = [
    ['Janeiro'  , 33],
    ['Fevereiro', 68],
    ['Março'    , 45],
    ['Abril'    , 15],
    ['Maio'     , 10],
    ['Junho'    , 68]
  ]

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.Dados);
      observable.complete();
    })
  }
}
