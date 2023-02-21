import {Component, OnInit} from '@angular/core';
import {Food} from "../../../shared/models/food";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food ! : Food;

  constructor(activatedRoute:ActivatedRoute,foodService :FoodService,
              private cartService : CartService, private router :Router){
    activatedRoute.params.subscribe((params) =>{
      if(params.id)
        this.food = foodService.getFoodById(params.id);
    })
  }
  ngOnInit(): void {
  }

  addToCart(){
    console.log("food page component "+this.food.id);
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
