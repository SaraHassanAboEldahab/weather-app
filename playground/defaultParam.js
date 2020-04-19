const product={
    label:"clothes",
    price:45,
    stock:0
}

const info=(type,{price=10,stock=0}={})=>{
   console.log(type,price,stock)
}

info("order",product)