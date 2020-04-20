/// 3. Building a JSON HTTP Endpoint ///
const path = require("path")
const express = require("express");
const hbs = require("hbs")
const geoCode = require("./utils/geoCode")
const forecast = require("./utils/foreCast")

const app = express()
const port = process.env.PORT || 3000

//define path for express config
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, "../templates/partials")
const publicPath = path.join(__dirname, "../public")

//setup handlebars engine and views location
app.use(express.static(publicPath))
app.set("view engine", "hbs")
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Sara"
    })
})


app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        text: "this is help text",
        name: "Sara"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Page",
        name: "Sara"
    })
})
app.get("/weather", (req, res) => {
    const address = req.query.address
    if (!address) {
        return res.send({
            error: "please enter ur location"
        })
    }
    //fel awl ama kont baktb l address 8alt kan by3ml crashing w msh bygybly l error l fel geoCode function l ktbah w kan l 7al eny 3amlt destructuring by adding {}
    geoCode(address, (error, { latitude, longitude, place } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                location: place,
                address: address,
                forecast: forecastData,

            })
        })
    })

})



app.get("/help/*", (req, res) => {
    res.render("error", {
        title: "404",
        name: "Sara",
        errorMsg: "help article not found"
    })
})
app.get("*", (req, res) => {
    res.render("error", {
        title: "404",
        name: "Sara",
        errorMsg: "Page not found"
    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})