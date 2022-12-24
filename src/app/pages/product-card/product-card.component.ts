import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();

  constructor() {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  ngOnInit(): void {}
}
