const  express=require('express')
const  route=express.Router()
const mongoose=require('mongoose')



const studentmodel=require('../model/student.model.js')
route.use(express.json())
route.use(express.urlencoded({extended:true}))





route.post('/',async (req,res)=>{
    const {_id,name,phone,email}=req.body;
  
    const student=  await studentmodel.create({
        _id,
        name,
        phone,
        email,
    })
    
    res.status(200).json(student)
})






route.get('/',async(req,res)=>{
    try{
    const student=await studentmodel.find({})
res.status(200).json(student)    
}catch(error)
{
    res.status(404).send({message:"errormessage"})
}
})






route.get('/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    const student=await studentmodel.findById(id)
    res.status(200).json(student)
    }
    catch(error){
        res.status(404).send({message:"error in getting  the data "})
    }
    }
)






route.put('/:id',async(req,res)=>{
    const {id}=req.params;
    try{

        const student =await studentmodel.findByIdAndUpdate(id,req.body)
        if(!student){
            res.status(404).send("no student available")
        }
        else{
            const updatedstd=await studentmodel.findById(id)
            res.status(200).json(updatedstd)
        }
    }
catch(error)
{
    res.status(404).send({message:"error in updating   the data "})
}
})



route.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    try{

        const student =await studentmodel.findByIdAndDelete(id)
        if(!student){
            res.status(404).send("no student available")
        }
        else{
            res.status(200).send("item deleted successfully")
        }
    }
catch(error)
{
    res.status(404).send({message:"error in deleting  the data "})
}
})







module.exports=route