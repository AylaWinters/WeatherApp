var d = new Date();
var today = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

$(document).ready(function() {
  // grab input and put in query url
  $(".searchBtn").on("click", function search(event) {
    // event.preventDefault();
    // location.reload()

    var city = $("#search").val();
    if (city === "") {
      $("#err").text("Please enter a city!");
    } else {
      $(".display").removeClass("hide");
      $(".five").removeClass("hide");

      makeCallsDoWork(city);
    }

    var list = $("#list");
    var cityArr;
    //  get cityArr from localStorage
    cityArr = localStorage.getItem("cities");
    //  take a string and make an arr
    cityArr = JSON.parse(cityArr);
    // if cityArr exists
    if (cityArr === null) {
      // assign value from lS to cityArr
      cityArr = [];
    }

    var upperCase = city.replace(city.charAt(0), city.charAt(0).toUpperCase());

    if (city != "") {
      cityArr.push(upperCase);
    }

    storeCities();
    //input to local storage
    function storeCities() {
      localStorage.setItem("cities", JSON.stringify(cityArr));
    }
    // pull from local storage
    var li = $("<li>").addClass("buttons");
    li.text(upperCase);
    if (city != "") {
      list.append(li);
    }
  });
  var cityBtns;
  var list = $("#list");
  // get cities from LS
  // assign to var
  cityBtns = localStorage.getItem("cities");
  // destrigify to arr
  cityBtns = JSON.parse(cityBtns);
  // for each city in arr
  if (cityBtns !== null) {
    for (var i = 0; i < cityBtns.length; i++) {
      // create li item
      // debugger
      // console.log(typeof cityBtns[i])
      // var cityName = JSON.stringify(cityBtns[i])
      var li = $("<li>").addClass("buttons");
      li.text(cityBtns[i]);
      list.append(li);
    }
  }

  $(document).on("click", ".buttons", function() {
    console.log($(this).html());
    var cityName = $(this).html();
    $(".display").removeClass("hide");
    $(".five").removeClass("hide");

    makeCallsDoWork(cityName);
  });

  function makeCallsDoWork(cityName) {
    queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&APPID=88ec15a371a789a350f0798f4a6bd272";

    // ajax to pull data
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //fill in data to display
      var iconCode = response.weather[0].icon;
      var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";

      $("#name").text(response.name + " " + today);
      $(".icon").attr("src", iconURL);
      console.log(iconURL);
      $("#temp").text(
        (((response.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)
      );
      $("#hum").text(response.main.humidity);
      $("#wind").text(response.wind.speed);
    });

    // fill in data to cards
    query2URL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&APPID=88ec15a371a789a350f0798f4a6bd272";

    // ajax to pull 5 day data
    $.ajax({
      url: query2URL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      let day = 1;
      for (let i = 4; i < response.list.length; i = i + 8) {
        // grab that date
        var dt_time = response.list[i].dt_txt;
        var mo_day = dt_time.substring(5, 10);

        year = dt_time.substring(2, 4);
        dt_time = mo_day.replace("-", "/") + "/" + year;

        if (dt_time.charAt(0) === "0") {
          var final = dt_time.slice(1);
        } else {
          var final = dt_time;
        }

        $("#day" + day).text(final);
        day += 1;
      }
      //
      // create a for loop that searches th first 8 entries for no
      for (let i = 0; i < 8; i++) {
        if (response.list[i].dt_txt.substring(11) === "12:00:00") {
          var noon = response.list[i];
          console.log(noon);
          var noon2 = response.list[i + 8];
          console.log(noon2);
          console.log(i);

          $("#temp1").text(
            "Temp: " +
              (((response.list[i].main.temp - 273.15) * 9) / 5 + 32).toFixed(0)
          );
          $("#hum1").text("Humidity: " + response.list[i].main.humidity);
          var ic1 = response.list[i].weather[0].icon;
          console.log(ic1);

          var iURL1 = "https://openweathermap.org/img/wn/" + ic1 + "@2x.png";
          $(".icon1").attr("src", iURL1);

          $("#temp2").text(
            "Temp: " +
              (
                ((response.list[i + 8].main.temp - 273.15) * 9) / 5 +
                32
              ).toFixed(0)
          );
          $("#hum2").text("Humidity: " + response.list[i + 8].main.humidity);
          var ic2 = response.list[i + 8].weather[0].icon;
          var iURL2 = "https://openweathermap.org/img/wn/" + ic2 + "@2x.png";
          $(".icon2").attr("src", iURL2);

          $("#temp3").text(
            "Temp: " +
              (
                ((response.list[i + 16].main.temp - 273.15) * 9) / 5 +
                32
              ).toFixed(0)
          );
          $("#hum3").text("Humidity: " + response.list[i + 16].main.humidity);
          var ic3 = response.list[i + 16].weather[0].icon;
          var iURL3 = "https://openweathermap.org/img/wn/" + ic3 + "@2x.png";
          $(".icon3").attr("src", iURL3);

          $("#temp4").text(
            "Temp: " +
              (
                ((response.list[i + 24].main.temp - 273.15) * 9) / 5 +
                32
              ).toFixed(0)
          );
          $("#hum4").text("Humidity: " + response.list[i + 24].main.humidity);
          var ic4 = response.list[i + 24].weather[0].icon;
          var iURL4 = "https://openweathermap.org/img/wn/" + ic4 + "@2x.png";
          $(".icon4").attr("src", iURL4);

          $("#temp5").text(
            "Temp: " +
              (
                ((response.list[i + 32].main.temp - 273.15) * 9) / 5 +
                32
              ).toFixed(0)
          );
          $("#hum5").text("Humidity: " + response.list[i + 32].main.humidity);
          var ic5 = response.list[i + 32].weather[0].icon;
          var iURL5 = "https://openweathermap.org/img/wn/" + ic5 + "@2x.png";
          $(".icon5").attr("src", iURL5);
        }
      }
    });
  }
});
