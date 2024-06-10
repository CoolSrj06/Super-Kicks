const express=require('express');
const app=express();
const useRouter=require('./routes/url');
const userRouter=require('./routes/user');

app.use(express.json());
//to support form data 
app.use(express.urlencoded({extended:false}));

const PORT=8000;
app.listen(PORT,()=> console.log(`Connected at PORT: ${PORT}`));

const {connectMongoDb}=require('./connection');
connectMongoDb("mongodb://127.0.0.1:27017/Super_Kicks");

app.use("/",useRouter);
app.use('/user', userRouter);