const request = require("request")
const foreCast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/b7d4f09a0b230d0475b4732ecfffa9d1/" + latitude + "," + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("unable to connect to wether services !!", undefined)
        } else if (body.error) {
            callback("unable to find location !!", undefined)

        } else {
            callback(undefined, `${body.daily.data[0].summary} ,the temperature high is  ${body.daily.data[0].temperatureHigh} ,the temperature low is  ${body.daily.data[0].temperatureLow} and It is currently ${body.currently.temperature} degree out.`)
        }
    })
}
module.exports = foreCast