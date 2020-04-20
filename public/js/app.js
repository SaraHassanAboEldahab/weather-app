const form = document.querySelector("form")
const search = document.querySelector("input")
const msg1 = document.querySelector("#msg-1")
const msg2 = document.querySelector("#msg-2")

msg1.textContent = "loading ....."
msg2.textContent = " "

//fetch API is not part of js but is browser based API 
form.addEventListener("submit", (e) => {
    e.preventDefault()
    loc = search.value
    fetch("/weather?address=" + loc).then((res) => { //that means fetch data from this url then run this function
        res.json().then((data) => { // this function will run when json data has arrived and passed
            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.forecast

            }
        })
    })
})