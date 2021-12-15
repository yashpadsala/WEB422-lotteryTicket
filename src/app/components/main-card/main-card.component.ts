import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  nums:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  isSelected:boolean = false;
  isAmount:boolean = false;
  isFull:boolean = false;
  isError:boolean = false;
  selectedNumbers: number[] = [];

  @Input() getAmount:Number=0;
  @Input() allNumbers:number[] = [];

  finalAmount:number=0;

  @Output() exportNumbers = new EventEmitter<number[]>();
  @Output() sentFinalAmount = new EventEmitter<number>();
  
  selectedAmount:string = "";
  amountReceived:number = 0;
  change:number = 0;

  selectNumber(clickedNum:number)
  {
    this.isError = false;
    if(this.allNumbers.includes(clickedNum))
    {
      if(this.getAmount != 0)
      {
        this.isAmount = true;
      }
      else {
        this.isAmount = false;
      }
      for(let i = 0; i < this.allNumbers.length; i++)
      {
        if(this.allNumbers[i] === clickedNum)
        {
          this.allNumbers.splice(i, 1);
        }
      }
    }
    else if(this.isFull)
    {
      alert("You selected maximum numbers.")
    }
    else
    {
      this.isAmount = true;
      this.allNumbers.push(clickedNum);
      this.exportNumbers.emit(this.allNumbers);
      
      //this.sentFinalAmount.emit(this.getAmount)
    }
  }

  selected(clickedNum:number): boolean
  {
    this.isSelected = false;
    if(this.allNumbers.includes(clickedNum))
    {
      this.isSelected = true;
    }
    return this.isSelected;
  }

  clear()
  {
    
      console.log(this.amountReceived);
      this.allNumbers = [0, 0, 0, 0, 0];
      this.isFull = false;
      this.getAmount = 0;
      console.log(this.allNumbers);
      this.exportNumbers.emit(this.allNumbers);
      
      
      
      //this.sentFinalAmount.emit(this.getAmount);
    alert("Your ticket is cleared.")
  }

  checkFull():boolean
  {
    this.isFull = false;
    if(this.allNumbers.length === 5)
    {
      this.isFull = true;
    }
    return this.isFull;
  }

  checkout():boolean
  {
    if(!this.isFull)
    {
      alert("Please select five numbers.")
    }
    else if(this.getAmount === 0)
    {
      alert("Please select bet amount.")
    }
    else
    {
      this.isError = false;
      alert("Your selected numbers are " + this.allNumbers + " and the bet amount is " + this.getAmount);
    }
    if(this.getAmount != 0)
    {
      this.isAmount = true;
    }
    else {
      this.isAmount = false;
    }
    return this.isError
  }

}
