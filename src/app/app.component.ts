import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WHE WHE Lottery';

  @Input() totalBetAmount:number = 0;
  @Input() allNumbers:number[] = [];
  @Output() exportPrice = new EventEmitter<number> ();
  @Output() exportNumbers = new EventEmitter<number[]>();
  
  receiveBetAmount(totalAmount:number)
  {
    this.totalBetAmount = totalAmount;
    this.exportPrice.emit(totalAmount);
    //for testing purposes
    console.log(totalAmount);
  }

  getNumbers = (receivedNumbers:number[]) => {
    //this.getNumbers = receivedNumbers
    for(let i = 0; i < receivedNumbers.length; i++)
    {
      this.allNumbers[i] = receivedNumbers[i];
    }
    this.exportNumbers.emit(receivedNumbers);
  }
}
