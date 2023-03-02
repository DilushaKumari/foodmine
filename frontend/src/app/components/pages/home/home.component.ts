import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      let foodObservable : Observable<Food[]>;
      console.log('params:'+params);
      if (params.searchTerm)
             foodObservable = foodService.getAllFoodsBySearchTerm(params.searchTerm);
       else if (params.tag)
        foodObservable = foodService.getAllFoodsByTags(params.tag);
      else foodObservable = foodService.getAll();

      foodObservable.subscribe(foodObservable =>{
        this.foods = foodObservable;
      })
    });
  }
  ngOnInit(): void {}
}
