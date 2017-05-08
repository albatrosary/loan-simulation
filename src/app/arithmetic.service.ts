import { Injectable } from '@angular/core';

@Injectable()
export class ArithmeticService {

  constructor() { }

  /**
   * q * ( 1 + q ) ^ P
   * -----------------  *  B
   * ( 1 + q ) ^ P - 1
   * 
   * q = R / 12 / 100
   * 
   * B: 借入金額
   * P: 返済回数
   * R: 利率
   */
  MonthlyRepayments (
    borrowings: number, // 借入金額
    rate_per_annum: number, // 利率
    number_of_scheduled_payments: number // 返済回数
  ) {
    let q = rate_per_annum / 12 / 100;
    return Math.floor(q * Math.pow( 1 + q , number_of_scheduled_payments * 12 ) / ( Math.pow( 1 + q , number_of_scheduled_payments * 12 ) - 1 )  * borrowings);
  }

  /**
   * 支払利息
   */
  Interest (
    borrowings: number, // 借入金額
    rate_per_annum: number // 利率
  ) {
    return Math.floor(borrowings * rate_per_annum / 12 / 100);
  }

}
