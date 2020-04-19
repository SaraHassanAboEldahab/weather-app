const request =require("request")

const geoCode=(address,callback)=>{
   const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1Ijoic2FyYWFib2VsZGFoYWIyMDUiLCJhIjoiY2s4cGFhNHB3MTFwcjNlcXpxcDFpNDM2aCJ9.8mKi0Tk6SbHrdF34s0hrOQ&limit=1"

     request({url,json:true},(error,{body})=>{
            if(error){
                callback("Unable to connect to location services!",undefined)
            }
            else if(body.features.length===0){
                callback("Unable to find location. Try another search.",undefined)
            }
            else{
              callback(undefined,{
                  latitude:body.features[0].center[1],
                  longitude:body.features[0].center[0],
                  place:body.features[0].place_name
              })
            }
     })
} 
module.exports=geoCode