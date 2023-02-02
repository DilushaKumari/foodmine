import {Food} from "./app/shared/models/food";

export const sample_foods : Food []= [
  {
    id:'1',
    name:'Vegetable Pizza',
    price :150,
    cookTime :'40-50',
    favorite :false,
    origins :['Italy'],
    stars:4.0,
    imageUrl:'assets/food-1.jpg',
    tags:['FastFood','Pizza','Lunch']

  },
  {
    id:'2',
    name:'Chicken Soup',
    price :250,
    cookTime :'40-50',
    favorite :false,
    origins :['India','Asia'],
    stars:4.0,
    imageUrl:'assets/food-2.jpg',
    tags:['SlowFood','Soup']

  }
]
