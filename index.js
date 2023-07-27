const express=require("express")
const cors=require('cors')
const http = require('http');
const { resolve } = require("dns");
const port = 3000;
const app=express()
const data=[
    {id:1,name:"jihed",age:26},
    {id:2,name:"haythem",age:16}

]
const{userRouter}=require("./route/userRouter")
app.user(cors())

app.use(express.json())


app.user("/",userRouter)
app.listen(port,()=>{
console.log("Server is runing http://localhost:"+port);
});

