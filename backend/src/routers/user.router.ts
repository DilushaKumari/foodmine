import {Router} from 'express'
import { sample_users} from "../../data";
import jwt from "jsonwebtoken";
import {User, UserModel} from "../models/user.model";
import {HTTP_BAD_REQUEST} from "../constatnts/http_status";
const asyncHandler = require('express-async-handler')
import bcrypt from 'bcryptjs'

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
        const {email,password}=req.body;
        const user = await UserModel.findOne({email});
        if(user){
            let isMatch = await checkPassword(password, user.password);

            if(isMatch){
                const token = generateTokenResponse(user);
              res.send(
                  {
                      'user':user,
                      'token':token
                  }
              )
            }      else {
                res.status(HTTP_BAD_REQUEST).send("Password is not valid!")
            }

        }else{
            res.status(HTTP_BAD_REQUEST).send("User name is not valid!")
        }

    }
))


router.post('/register',asyncHandler(
    async(req,res)=>{
        const {name,email,password,address} = req.body;
        const user = await UserModel.findOne({email});

        if(user){
            res.status(HTTP_BAD_REQUEST).send('User is already exist... please login');
            return;
        }

        const encryptedPassword = await bcrypt.hash(password,10);
        const newUser:User ={
            id :'',
            name,
            email:email.toLowerCase(),
            password:encryptedPassword,
            address,
            isAdmin:false,
            token :''

        }
        const dbuser = await UserModel.create(newUser);

        const token = generateTokenResponse(dbuser);
        res.send(
            {
                'user':dbuser,
                'token':token
            }
        )
    }
))

const generateTokenResponse = (user :any)=>{
     const token = jwt.sign({
            id: user.id,
            email:user.email,
            isAdmin :user.isAdmin
        },process.env.JWT_SECRET!,
        {expiresIn :"10d"});

    return token;

}
async function checkPassword(plaintextPassword, hash) :Promise<Boolean> {
    try {
        const result = await bcrypt.compare(plaintextPassword, hash);
        return result;
    } catch (error) {
        return false;
    }
}
export default router;