import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CurrencyService } from '../services/currency.service';
import { Currency } from '../interfaces/interfaces';
import { ExchangeRateService } from '../services/exchange-rate.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  baseList: Currency[] = [];
  quoteList: Currency[] = [];
  baseIsoCode: string = '';
  quoteIsoCode: string = '';
  baseId: number | undefined;
  quoteId: number | undefined;
  conversionValue: number | undefined;
  calculationMade: number = 0;

  miFormulario: FormGroup = this._fb.group({
    base: [null, [Validators.required]],
    quote: [null, [Validators.required]],
    amount: [null, [Validators.required]]
  });

  constructor(
    private _fb: FormBuilder,
    private _currencyService: CurrencyService,
    private _exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this._currencyService.getAllCurrencies()
      .subscribe(currencies => {
        this.baseList = currencies;
        this.quoteList = currencies;
      });

    this._changeBase();
    this._changeQuote();
  }

  guardar() {
    this._exchangeRateService.getCalculationMade(this.baseId!, this.quoteId!, this.miFormulario.controls['amount'].value)
      .subscribe(value => this.calculationMade = value);
  }

  private _changeBase() {
    this.miFormulario.get('base')?.valueChanges
      .subscribe(id => {
        this.baseIsoCode = this._getCurrency(id).isoCode;
        this.baseId = id;
        this._getDataConversion(this.baseId, this.quoteId);
      });
  }

  private _changeQuote() {
    this.miFormulario.get('quote')?.valueChanges
      .subscribe(id => {
        this.quoteId = id;
        this.quoteIsoCode = this._getCurrency(id).isoCode;
        this._getDataConversion(this.baseId, this.quoteId);
      });
  }

  private _getCurrency(id: number): Currency {
    return this.baseList.find(c => c.id == id)!;
  }

  private _getDataConversion(baseId: number | undefined, quoteId: number | undefined) {
    if (!baseId || !quoteId) return;
    this._exchangeRateService.getDataConversion(baseId, quoteId)
      .subscribe(conversion => {
        console.log(conversion);
        this.conversionValue = conversion.conversion;
      });
  }

}
