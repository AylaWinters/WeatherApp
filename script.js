city = $("#search").val();
queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=88ec15a371a789a350f0798f4a6bd272"

// ajax to pull data
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.Runtime);
});
// grab input and put in query url

//fill in data to display

// fill in data to cards

//input to local storage

// local storage to left button