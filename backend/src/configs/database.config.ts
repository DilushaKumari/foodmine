import {connect, ConnectOptions} from 'mongoose'

export const dbConnect = () =>{
    //connect("mongodb+srv://dilusha:123@cluster0.y97jspp.mongodb.net/foodmine?retryWrites=true&w=majority",{
      connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology :true
    } as ConnectOptions).then(
        ()=>{
            console.log("Connect Successfully ");
        },
        (error)=>{
            console.log("mongo error : "+error);
        }
    )
}