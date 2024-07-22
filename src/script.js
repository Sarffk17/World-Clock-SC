function updateTime() {

let milwaukeeElement = document.querySelector("#milwaukee");
let milwaukeeDateElement = milwaukeeElement.querySelector("#milwaukee .date");
let milwaukeeTimeElement = milwaukeeElement.querySelector("#milwaukee .time");
let milwaukeeTime = moment().tz("US/Central");

milwaukeeDateElement.innerHTML = milwaukeeTime.format("MMMM Do YYYY");
milwaukeeTimeElement.innerHTML = milwaukeeTime.format("h:mm:ss [<small>]A[</small>]")


let dublinElement = document.querySelector("#dublin");
let dublinDateElement = dublinElement.querySelector("#dublin .date");
let dublinTimeElement = dublinElement.querySelector("#dublin .time");
let dublinTime = moment().tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]")

let dubaiElement = document.querySelector("#dubai");
let dubaiDateElement = dubaiElement.querySelector("#dubai .date");
let dubaiTimeElement = dubaiElement.querySelector("#dubai .time");
let dubaiTime = moment().tz("Asia/Dubai");

dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss [<small>]A[</small>]")

let moscowElement = document.querySelector("#moscow");
let moscowDateElement = moscowElement.querySelector("#moscow .date");
let moscowTimeElement = moscowElement.querySelector("#moscow .time");
let moscowTime = moment().tz("Europe/Moscow");

moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
moscowTimeElement.innerHTML = moscowTime.format("h:mm:ss [<small>]A[</small>]")

}

updateTime();
setInterval(updateTime, 1000);