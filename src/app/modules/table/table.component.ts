import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Output() hoverEvent = new EventEmitter<string>();
  @Output() hideEvent = new EventEmitter<string>();
  @Output() goTodetail = new EventEmitter<string>();
  @Input() product : any;
  @Input() total1 : any;
  @Input() total2 : any;
  @Input() total3 : any;


  
  constructor() { }

  ngOnInit(): void {
    
   
  }

  showDetail(value: any) {
    this.hoverEvent.emit(value)
  }

  hideDetail() {
    console.log('yess')
    this.hideEvent.emit();
  }
  detail() {
    console.log('yess')
    this.goTodetail.emit();
  }
}
