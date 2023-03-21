import {Router} from 'express'
import { sample_users} from "../../data";
import jwt from "jsonwebtoken";
import { UserModel} from "../models/user.model";
const asyncHandler = require('express-async-handler')

const router =new Router();

router.get("/seed",
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if (usersCount > 0) {
            res.send("Seed is already done");
            return;
        }
        await UserModel.create(sample_users);
        res.send("Seed is done");


    }
)
router.post("/login",asyncHandler(
    async (req,res)=>{
        const body =req.body;
        const {email,password}=req.body;

        const user = await UserModel.findOne({email,password});
        if(user){
            res.send(generateTokenResponse(user));
        }else{
            res.status(400).send("User name or Password is not valid!")
        }

    }
))

const generateTokenResponse = (user :any)=>{
    const token = jwt.sign({
            email:user.email,
            isAdmin :user.isAdmin
        },"SomeRandomText",
        {expiresIn :"10d"});

    user.token = token;
    return user;

}

export default router;