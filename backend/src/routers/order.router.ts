import {Router} from "express"
import {HTTP_BAD_REQUEST} from "../constatnts/http_status";
import {OrderModel} from "../models/order.model";
import {OrderStatus} from "../constatnts/order_status";
const asyncHandler = require('express-async-handler')
import auth from "../middlewares/auth.mid";


const router = Router();
router.use(auth);

router.post('/create',asyncHandler(async (req,res) =>{
    const requestOrder = req.body;

    if(requestOrder.items.length<=0){
        res.status(HTTP_BAD_REQUEST).send('Cart is Empty!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status : OrderStatus.NEW
    });

    const newOrder = new OrderModel({...requestOrder,user:req.user.id});
    await newOrder.save();
    res.send(newOrder);
})
);

router.get('/newOrderForCurrentUser',asyncHandler(async (req:any,res )=>{
    const order  = await OrderModel.findOne({user:req.user.id,status:OrderStatus.NEW });

    if(order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}))

export default router;

