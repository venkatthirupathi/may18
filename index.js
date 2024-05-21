
require('dotenv').config()
const studentroute=require('./route/student.route')
const  express=require('express');
const app=express()
const mongoose=require('mongoose')
const  port =process.env.PORT;

app.use(express.json())

app.use('/api/students',studentroute)

mongoose.connect(`mongodb://127.0.0.1:27017/testjp`)
.then(()=>{
    console.log("cnnected to mongodb succsessful")
})
.catch(()=>{
    console.log("error")
})


app.listen(port,()=>{
    console.log(`server is running  at ${port}`)
})
