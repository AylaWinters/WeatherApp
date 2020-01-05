var d = new Date();
var today = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear()
console.log(today);

var day1 = (d.getMonth() + 1) + "/" + (d.getDate() + 1) + "/" + d.getFullYear()
$("#day1").text(day1)

var day2 = (d.getMonth() + 1) + "/" + (d.getDate() + 2) + "/" + d.getFullYear()
$("#day2").text(day2);

var day3 = (d.getMonth() + 1) + "/" + (d.getDate() + 3) + "/" + d.getFullYear()
$("#day3").text(day3);

var day4 = (d.getMonth() + 1) + "/" + (d.getDate() + 4) + "/" + d.getFullYear()
$("#day4").text(day4);

var day5 = (d.getMonth() + 1) + "/" + (d.getDate() + 5) + "/" + d.getFullYear()
$("#day5").text(day5);




// grab input and put in query url
$(".searchBtn").on("click", function search(event) {
    // event.preventDefault();
    // location.reload()

    var city = $("#search").val();

    queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=88ec15a371a789a350f0798f4a6bd272"

    // ajax to pull data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        //fill in data to display
        var iconCode = response.weather[0].icon
        var iconURL = ("http://openweathermap.org/img/wn/" + iconCode + "@2x.png")

        $("#name").text(response.name + " " + today)
        $(".icon").attr('src', iconURL)
        console.log(iconURL)
        $("#temp").text(((response.main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum").text(response.main.humidity)
        $("#wind").text(response.wind.speed)

    });

    // fill in data to cards
    query2URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=88ec15a371a789a350f0798f4a6bd272"

    // ajax to pull 5 day data
    $.ajax({
        url: query2URL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


        $("#temp1").text("Temp: " + ((response.list[5].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum1").text("Humidity: " + response.list[5].main.humidity)
        var ic1 = response.list[5].weather[0].icon
        var iURL1 = ("http://openweathermap.org/img/wn/" + ic1 + "@2x.png")
        $(".icon1").attr("src", iURL1)



        $("#temp2").text("Temp: " + ((response.list[13].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum2").text("Humidity: " + response.list[13].main.humidity)
        var ic2 = response.list[13].weather[0].icon
        var iURL2 = ("http://openweathermap.org/img/wn/" + ic2 + "@2x.png")
        $(".icon2").attr("src", iURL2)


        $("#temp3").text("Temp: " + ((response.list[21].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum3").text("Humidity: " + response.list[21].main.humidity)
        var ic3 = response.list[21].weather[0].icon
        var iURL3 = ("http://openweathermap.org/img/wn/" + ic3 + "@2x.png")
        $(".icon3").attr("src", iURL3)


        $("#temp4").text("Temp: " + ((response.list[29].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum4").text("Humidity: " + response.list[29].main.humidity)
        var ic4 = response.list[29].weather[0].icon
        var iURL4 = ("http://openweathermap.org/img/wn/" + ic4 + "@2x.png")
        $(".icon4").attr("src", iURL4)


        $("#temp5").text("Temp: " + ((response.list[37].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum5").text("Humidity: " + response.list[37].main.humidity)
        var ic5 = response.list[37].weather[0].icon
        var iURL5 = ("http://openweathermap.org/img/wn/" + ic5 + "@2x.png")
        $(".icon5").attr("src", iURL5)


    });


    var list = $("#list");
    var cityArr

    //  get cityArr from localStorage 
    cityArr = localStorage.getItem("cities")
    //  take a string and make an arr
    cityArr = JSON.parse(cityArr)
    // if cityArr exists 
    if (cityArr === null) {
        // assign value from lS to cityArr
        cityArr = []
    }



    cityArr.push(city)

    storeCities()
    //input to local storage

    function storeCities() {
        localStorage.setItem("cities", JSON.stringify(cityArr));

    }

    // pull from local storage

    var li = $("<li>").addClass("buttons")
    li.text(city)
    list.append(li)


});


var cityBtns
var list = $("#list");
// get cities from LS
// assign to var
cityBtns = localStorage.getItem("cities")
// destrigify to arr
cityBtns = JSON.parse(cityBtns)
// for each city in arr
if (cityBtns !== null) {
    for (var i = 0; i < cityBtns.length; i++) {
        // create li item
        // debugger
        // console.log(typeof cityBtns[i])
        // var cityName = JSON.stringify(cityBtns[i])
        var li = $("<li>").addClass("buttons")
        li.text(cityBtns[i])
        list.append(li)
    }
}



$(".buttons").on("click", function () {
    console.log($(this).html())
    var cityName = $(this).html()

    queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=88ec15a371a789a350f0798f4a6bd272"

    // ajax to pull data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        //fill in data to display
        var iconCode = response.weather[0].icon
        var iconURL = ("http://openweathermap.org/img/wn/" + iconCode + "@2x.png")

        $("#name").text(response.name + " " + today)
        $(".icon").attr('src', iconURL)
        console.log(iconURL)
        $("#temp").text(((response.main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum").text(response.main.humidity)
        $("#wind").text(response.wind.speed)





    });

    // fill in data to cards
    query2URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=88ec15a371a789a350f0798f4a6bd272"

    // ajax to pull 5 day data
    $.ajax({
        url: query2URL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


        $("#temp1").text("Temp: " + ((response.list[5].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum1").text("Humidity: " + response.list[5].main.humidity)
        var ic1 = response.list[5].weather[0].icon
        var iURL1 = ("http://openweathermap.org/img/wn/" + ic1 + "@2x.png")
        $(".icon1").attr("src", iURL1)



        $("#temp2").text("Temp: " + ((response.list[13].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum2").text("Humidity: " + response.list[13].main.humidity)
        var ic2 = response.list[13].weather[0].icon
        var iURL2 = ("http://openweathermap.org/img/wn/" + ic2 + "@2x.png")
        $(".icon2").attr("src", iURL2)


        $("#temp3").text("Temp: " + ((response.list[21].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum3").text("Humidity: " + response.list[21].main.humidity)
        var ic3 = response.list[21].weather[0].icon
        var iURL3 = ("http://openweathermap.org/img/wn/" + ic3 + "@2x.png")
        $(".icon3").attr("src", iURL3)


        $("#temp4").text("Temp: " + ((response.list[29].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum4").text("Humidity: " + response.list[29].main.humidity)
        var ic4 = response.list[29].weather[0].icon
        var iURL4 = ("http://openweathermap.org/img/wn/" + ic4 + "@2x.png")
        $(".icon4").attr("src", iURL4)


        $("#temp5").text("Temp: " + ((response.list[37].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))
        $("#hum5").text("Humidity: " + response.list[37].main.humidity)
        var ic5 = response.list[37].weather[0].icon
        var iURL5 = ("http://openweathermap.org/img/wn/" + ic5 + "@2x.png")
        $(".icon5").attr("src", iURL5)


    });
});







