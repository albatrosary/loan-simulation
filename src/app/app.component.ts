import { Component } from '@angular/core';

import { ArithmeticService } from './arithmetic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  borrowings: number; // 万円
  rate_per_annum: number;
  number_of_scheduled_payments: number;
  month: string;

  constructor(private _arithmetic: ArithmeticService) {
    // 初期値
    this.borrowings = 4500;
    this.rate_per_annum = 0.68;
    this.number_of_scheduled_payments = 20;
    this.month = new Date().getFullYear() + '-' + ('0' + (new Date().getMonth()+1)).slice(-2);
  }

  /**
   * 月当たりの返済額
   * borrowings: number, // 借入金額
   * rate_per_annum: number, // 利率
   * number_of_scheduled_payments: number // 返済回数
   */
  repay() {
    return this._arithmetic.MonthlyRepayments(
      this.borrowings * 10000,
      this.rate_per_annum,
      this.number_of_scheduled_payments
    )
  }

  /**
   * 利息
   */
  interest(borrowings: number, rate_per_annum: number) {
    return this._arithmetic.Interest(
      borrowings,
      rate_per_annum
    )
  }

  items = [];
 /**
  * 返済計算
  * borrowings: number, // 借入金額
  * rate_per_annum: number, // 利率
  * number_of_scheduled_payments: number // 返済回数
  */
  hoge() {
    this.items = [];

    let _repay = this.repay();
    let _interests = 0;

    for (let i=0; i < this.number_of_scheduled_payments * 12; i++) {
      
      let borrowings = this.borrowings * 10000 - _repay * i + _interests;
      let interest = this.interest(borrowings, this.rate_per_annum );
      _interests += interest;

      this.items.push({
        borrowings: borrowings, // 返済残
        repayments: _repay,  // 月返済額
        principal: _repay - interest, // 元本
        interest: interest, // 利息
        prepayment: 0 // 繰り上げ額
      });
    }
  }  
}
