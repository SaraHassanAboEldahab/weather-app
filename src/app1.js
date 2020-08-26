//// 2. The Query String ///
const path=require("path")
const express = require("express");
const app=express()


app.get("/product",(req,res)=>{

    if(!req.query.search){
       return res.send({
            error:"there is an error"
        })
    }
    res.send({
        product:req.query
    })
    console.log(req.query)
    console.log(req.query.search)
    console.log(req.query.rating)

})


app.listen(3000,()=>{
    console.log("3000")
})