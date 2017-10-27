import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {cryptoCurrencies} from '../localdata';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Output() onSelectCurrency = new EventEmitter<string>();
  currencies: string[];
  cryptoCurrOptions: IMultiSelectOption[];
  selectedCurrency: string;
  optionsModel: number[];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 5,
    displayAllSelectedText: true
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select cryptos',
    allSelected: 'All selected',
  };

  constructor() {
    this.currencies = ['usd'];
    this.selectedCurrency = 'usd'; // Set default selected currency
    this.cryptoCurrOptions = cryptoCurrencies.map(function(elem, index) {
      return {id: index, name: elem};
    });
  }

  ngOnInit() {
  }

  selectCurrency(newValue) {
    this.onSelectCurrency.emit(newValue);
  }

  onChange() {
    console.log(this.optionsModel);
  }
}
