import {Food} from "./app/shared/models/food";

export const sample_foods : Food []= [
  {
    id:'1',
    name:'Vegetable Pizza',
    price :150,
    cookTime :'40-50',
    favorite :true,
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

  },
  {
    id:'3',
    name:'Cheese Burger',
    price :1050,
    cookTime :'10-15',
    favorite :true,
    origins :['United States','Germany'],
    stars:3.0,
    imageUrl:'assets/food-3.jpg',
    tags:['FastFood','Burger']

  },
  {
    id:'4',
    name:'Chicken Fried Rice',
    price :850,
    cookTime :'20-25',
    favorite :false,
    origins :['China'],
    stars:3.0,
    imageUrl:'assets/food-4.jpg',
    tags:['SlowFood','Fried Rice']

  },
  {
    id:'5',
    name:'Egg Kottu',
    price :750,
    cookTime :'20-25',
    favorite :false,
    origins :['Sri Lanka'],
    stars:5.0,
    imageUrl:'assets/food-5.jpg',
    tags:['SlowFood','Kottu']

  }
]
