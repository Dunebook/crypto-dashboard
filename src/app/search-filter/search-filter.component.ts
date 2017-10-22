import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { cryptoCurrencies } from '../localdata';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Output() onSelectCurrency = new EventEmitter<string>();
  currencies: string[];
  cryptoCurrOptions: string[];
  selectedCurrency: string;
  constructor() {
    this.currencies = ['usd'];
    this.selectedCurrency = 'usd'; // Set default selected currency
    this.cryptoCurrOptions = cryptoCurrencies;
  }

  ngOnInit() {
  }

  selectCurrency(newValue) {
    this.onSelectCurrency.emit(newValue);
  }
}
