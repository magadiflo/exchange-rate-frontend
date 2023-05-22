import { Component, OnInit } from '@angular/core';

import { Conversion } from '../interfaces/interfaces';
import { ExchangeRateService } from '../services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rates-list',
  templateUrl: './exchange-rates-list.component.html',
  styleUrls: ['./exchange-rates-list.component.scss']
})
export class ExchangeRatesListComponent implements OnInit {

  exchangeRatesList: Conversion[] = [];

  constructor(private _exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this._exchangeRateService.getExchangeRatesList()
      .subscribe(list => this.exchangeRatesList = list);
  }


}
