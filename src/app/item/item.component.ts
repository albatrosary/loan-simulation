import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  i: number;
  
  @Input()
  borrowings: number;
  
  @Input()
  principal: number;

  @Input()
  repayments: number;
  
  @Input()
  interest: number;

  @Input()
  month: string;

  prepayment: number;

  myVar:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  /**
   * 月加算
   */
  addMonth (i: number) {
    let dt = new Date(this.month);
    let month = dt.getMonth() + 1 + i;
    let year = dt.getFullYear();
    
    if (month % 12 === 0) {
      year = year + Math.floor(month / 12) -1;
      month = 12;
    } else {
      year = year + Math.floor(month / 12);
      month = month % 12;
    }

    return year + '/' + month;
  }

  onClick() {
    this.myVar = true;
  }
}
