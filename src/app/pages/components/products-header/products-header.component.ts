import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort = 'sort';
  itemsShowCount = 12;

  constructor() {}

  onSortUpdated(newSort: string) {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number) {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumsUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum);
  }

  ngOnInit(): void {}
}
