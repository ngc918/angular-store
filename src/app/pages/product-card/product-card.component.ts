import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Sneakers',
    price: 150,
    category: 'Shoes',
    description: 'Description',
    image: 'https://via.placeholder.com/150',
  };

  @Output() addToCart = new EventEmitter();

  constructor() {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  ngOnInit(): void {}
}
