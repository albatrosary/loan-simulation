import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  @Input()
  i: number
  
  @Input()
  prepayment: number;

  constructor() { }

  ngOnInit() {
  }

}
