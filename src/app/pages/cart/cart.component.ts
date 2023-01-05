import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'Sneakers',
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'Sneakers',
        price: 150,
        quantity: 2,
        id: 1,
      },
    ],
  };

  dataSource: Array<CartItem> = [];

  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService, private http: HttpClient) {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onRemoveItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  onLowerQuantity(item: CartItem) {
    this.cartService.lowerQuantity(item);
  }

  onAddQuantity(item: CartItem) {
    this.cartService.addToCart(item);
  }

  onCheckout(): void {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          'pk_test_51MMiEzD8qAyq22x5k3giEOFykt9wn0gsEK3Kkutoe4aGrtF1sdetBtb2NNDSOCI3UwXivQeF0QOR2gIbUOycCiOf00JfTyoNyK'
        );
        stripe?.redirectToCheckout({ sessionId: res.id });
      });
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }
}
