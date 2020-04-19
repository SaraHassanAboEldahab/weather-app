//// 2. The Query String ///
const path=require("path")
const express = require("express");
const app=express()


app.get("",(req,res)=>{
    res.render("index",{
    title:"Weather App",
    name:"Sara"
    })
})


app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Help",
       text:"this is help text",
       name:"Sara"
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About Page",
        name:"Sara"
    })
})
app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"please enter the address"
        })
    }
    res.send({
        forecast:"it is rainy",
        address:req.query.address
    })
})

app.get("/product",(req,res)=>{

    if(!req.query.search){
       return res.send({
            error:"there is an error"
        })
    }
    res.send({
        product:[]
    })
    console.log(req.query)
    //console.log(req.query.search)
   // console.log(req.query.rating)

})

app.get("/help/*",(req,res)=>{
    res.render("error",{
        title:"404",
        name:"Sara",
        errorMsg:"help article not found"
    })
})
app.get("*",(req,res)=>{
    res.render("error",{
        title:"404",
        name:"Sara",
        errorMsg:"Page not found"
    })
})


app.listen(4000,()=>{
    console.log("4000")
})