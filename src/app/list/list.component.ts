import { Component, Input, OnInit } from '@angular/core';
import {Coin} from '../coin';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() coins: Coin;
  @Input() selectedCurrency: string;

  constructor() { }

  ngOnInit() {
  }

}
