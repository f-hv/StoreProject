import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchItem:any;
  @Input() size:any;
  @Input() placeHolder:any;
  @Output() searchKeyword = new EventEmitter();
  @Output() keyupChange=new EventEmitter<any>();
  inputSearchKeyword:any
  constructor() { }

  ngOnInit(): void {}
  onKeyup(value:any){
    this.keyupChange.emit(value);
  }

  handleSearchOnInput() {
    this.searchKeyword.emit(this.inputSearchKeyword);
  }
}
