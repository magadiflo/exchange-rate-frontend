import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Currency } from '../interfaces/interfaces';

const URL: string = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _http: HttpClient) { }

  getAllCurrencies(): Observable<Currency[]> {
    return this._http.get<Currency[]>(`${URL}/currencies`);
  }

}
