import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() getAmount:Number=0;
  @Input() getNumbers:Number[] = [];

  @Input() myNumbers:number[] = [];
  @Input() finalAmount:number = 0;

}
