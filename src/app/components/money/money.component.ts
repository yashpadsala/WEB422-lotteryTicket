import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dollars:number[] = [1, 5, 10, 20];
  betAmount:number = 0;

  @Output() totalBetAmount = new EventEmitter<number> ();
  
  public setBetAmount(dollarNote:number)
  {
    this.betAmount += dollarNote;
    this.totalBetAmount.emit(this.betAmount);

  }

}
