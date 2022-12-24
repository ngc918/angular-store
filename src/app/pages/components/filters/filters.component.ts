import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['shoes', 'sports'];

  constructor() {}

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }

  ngOnInit(): void {}
}
