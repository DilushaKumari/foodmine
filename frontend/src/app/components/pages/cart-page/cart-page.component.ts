import {Component} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {CartItem} from "../../../shared/models/CartItem";
import {Cart} from "../../../shared/models/Cart";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart !: Cart;

  constructor(private cartService: CartService) {

    this.cart = cartService.getCartFromLocalStorage();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCartItem(cartItem.food.id);
    this.cart = this.cartService.getCartFromLocalStorage();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {

    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);

    this.cart = this.cartService.getCartFromLocalStorage();
  }

}
