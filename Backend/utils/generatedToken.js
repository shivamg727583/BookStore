import jwt from 'jsonwebtoken';


export const generatedToken = (id)=>{
    return jwt.sign({id},process.env.SECRET_KEY);
    }



