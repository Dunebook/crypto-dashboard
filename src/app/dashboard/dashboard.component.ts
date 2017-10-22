import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { mock } from '../mockapi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  coins: Coin[];
  selectedCurrency: string;

  constructor() {
    this.selectedCurrency = 'usd';
  }

  ngOnInit() {
    this.coins = mock.data; // TODO: replace mock with api
  }
  onSelectCurrency(newValue: string) {
    this.selectedCurrency = newValue;
  }
}
