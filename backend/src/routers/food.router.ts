import {Router} from 'express'
import {sample_foods, sample_tags} from "../../data";
import {FoodModel} from "../models/food.model";
//import asyncHandler from 'express-async-handler';
const asyncHandler = require('express-async-handler')


const router = new Router();

router.get("/seed",
    async (req, res) => {
        const foodsCount = await FoodModel.countDocuments();
        if (foodsCount > 0) {
            res.send("Seed is already done");
            return;
        }
        await FoodModel.create(sample_foods);
        res.send("Seed is done");

    }
)

router.get("/", asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find();
        res.send(foods);
    }
))

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {

        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const foods = await FoodModel.find({name: {$regex: searchRegex}});
        res.send(foods);

        //when getting data from data.ts
        // const searchTerm = req.params.searchTerm;
        // const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));

    }
    )
)

router.get("/tags/", async (req, res) => {
    const tags = await FoodModel.aggregate([
            {$unwind: '$tags'},
            {
                $group: {
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }

            }
        ]
    ).sort({count: -1});

    const all = {
        name: 'All',
        count: await FoodModel.countDocuments()
    }

    tags.unshift(all); // add all tag begging of the array
    res.send(tags);
})

router.get("/tag/:tagName", asyncHandler(async (req, res) => {

        const foods = await FoodModel.find({tags: req.params.tagName});
        res.send(foods);
    })
)

router.get("/:foodId", asyncHandler(
    async (req, res) => {
        const foodId = req.params.foodId;
        const food = await FoodModel.findById(foodId);
        //  const food = sample_foods.find(food => food.id == foodId);
        res.send(food);
    }
    )
)

export default router;