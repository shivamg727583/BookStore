import express  from 'express';
import dotenv from 'dotenv';
import cors  from 'cors';
import path from 'path';
const app = express();

import connectDB from './config/mongoose-config.js';
import bookRouter from './routes/bookRouter.js';
import userRouter from './routes/userRouter.js';

dotenv.config();


const PORT = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cors());
app.use('/book',bookRouter);
app.use('/user',userRouter)


if(process.env.NODE_ENV==='production'){
    const dirPath = path.resolve();
    app.use(express.static('Frontend/dist'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(dirPath,'Frontend','dist','index.html'));
    })
}


app.listen(PORT,function(){
console.log(`server is running on port ${PORT}`);
});