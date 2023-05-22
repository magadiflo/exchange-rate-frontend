import { Injectable } from '@angular/core';

import { Conversion, Currency } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private _http: HttpClient) { }

  getDataConversion(baseId: number, quoteId: number): Observable<Conversion> {
    return this._http.get<Conversion>(`${URL}/exchange-rates/base/${baseId}/quote/${quoteId}`);
  }

  getCalculationMade(baseId: number, quoteId: number, amount: number): Observable<number> {
    return this._http.get<number>(`${URL}/exchange-rates/base/${baseId}/quote/${quoteId}/amount/${amount}`);
  }
}
