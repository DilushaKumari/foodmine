import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {BehaviorSubject, filter, Observable, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;

  constructor(cartService: CartService) {

      cartService.getCartObservable().subscribe((newCart)=>{
        this.cartQuantity = newCart.totalCount;

    })
  }

  ngOnInit(): void {


  }

}
