import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '../services/currency.service';
import { Currency } from '../interfaces/interfaces';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  baseList: Currency[] = [];
  quoteList: Currency[] = [];

  constructor(private _currencyService: CurrencyService){}

  ngOnInit(): void {
    this._currencyService.getAllCurrencies()
      .subscribe(currencies => {
        this.baseList = currencies;
        this.quoteList = currencies;
      });
  }

  guardar() {

  }

}
