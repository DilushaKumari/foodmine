import {HTTP_UNAUTHORIZED} from "../constatnts/http_status";
import jwt from "jsonwebtoken";


export default (req: any, res: any, next: any) => {

   const token = req.get('access_token') as string;

   if (!token) return res.status(HTTP_UNAUTHORIZED).send();

    try {
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decodedUser;
    } catch (error) {
        res.status(HTTP_UNAUTHORIZED).send();
    }
    return next();
}