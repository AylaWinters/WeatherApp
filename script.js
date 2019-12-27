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
$(".searchBtn").on("click", function (event) {
    event.preventDefault();

    var city = $("#search").val();
    console.log(city);

    queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=88ec15a371a789a350f0798f4a6bd272"

    // ajax to pull data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.main.temp);

        //fill in data to display

        $("#name").text(response.name + " " + response.weather[0].icon + " " + today)
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

        // var test = new Date(1577836800)
        // var options = {
        //     year: 'numeric', month: 'numeric', day: 'numeric',
        // };

        // var result = test.toLocaleDateString('en', options);
        // console.log(result)

        // $("#day1").text(response.list[5].dt_txt)


        $("#temp1").text("Temp: " + ((response.list[5].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))

        $("#hum1").text("Humidity: " + response.list[5].main.humidity)


        $("#temp2").text("Temp: " + ((response.list[13].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))

        $("#hum2").text("Humidity: " + response.list[13].main.humidity)


        $("#temp3").text("Temp: " + ((response.list[21].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))

        $("#hum3").text("Humidity: " + response.list[21].main.humidity)


        $("#temp4").text("Temp: " + ((response.list[29].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))

        $("#hum4").text("Humidity: " + response.list[29].main.humidity)


        $("#temp5").text("Temp: " + ((response.list[37].main.temp - 273.15) * 9 / 5 + 32).toFixed(0))

        $("#hum5").text("Humidity: " + response.list[37].main.humidity)


    });




});


//input to local storage

// local storage to left button