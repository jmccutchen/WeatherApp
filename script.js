$(document).ready(function() {






// // api.openweathermap.org/data/2.5/weather?q={city name}

var key = ""

$("#search-btn").on("click", () => {
    
    var city= $("#cityInput").val();


dailyWeather(city);
clearInput();
})

function clearInput() {
    $("#cityInput").val("");
}

function dailyWeather(city){

    var currentURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e4c0273e5ea54d9af35c603a4dae870e`
  // for daily weather
    $.ajax({
        url: currentURL,
        method: "GET"

    }).then(function(response) {
        // gets daily stats
       var todayDate = moment().format("L");
        $("#cityStats").text(response.name + " (" + todayDate + ")");
        $(".temp").text("Temperature: " + response.main.temp + "\xB0F");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");

        // console.log(response.main.temp);
        // console.log(response.main.humidity);
        // console.log(response.wind.speed);

    });
    weekWeather(city);
}

function weekWeather(city){

    var fiveDayURL =  `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=e4c0273e5ea54d9af35c603a4dae870e`

  // for 5 day forecast weather
    $.ajax({
        url: fiveDayURL,
        method: "GET"

    }).then(function(response) {
    // day 1 of 5
    var day1Date = moment().add(1, "day").format("L")
     $("#day1").text(day1Date)
    //  for icon
    var day1Icon = response.list[0].weather[0].icon
    var day1IconURL = `http://openweathermap.org/img/wn/${day1Icon}.png`
    $("#day1Icon").attr("src", day1IconURL)
    // for temp
     $("#day1Temp").text("Temp: " + response.list[0].main.temp + " \xB0F")
    //  for Humidity
     $("#day1Humid").text("Humidity: " + response.list[0].main.temp + "%")

     // day 2 of 5
    var day2Date = moment().add(2, "day").format("L")
    $("#day2").text(day2Date)
    var day2Icon = response.list[1].weather[0].icon
    var day2IconURL = `http://openweathermap.org/img/wn/${day2Icon}.png`
    $("#day2Icon").attr("src", day2IconURL)
    $("#day2Temp").text("Temp: " + response.list[1].main.temp + " \xB0F")
    $("#day2Humid").text("Humidity: " + response.list[1].main.temp + "%")

    // day 3 of 5
    var day3Date = moment().add(3, "day").format("L")
    $("#day3").text(day3Date)
    var day3Icon = response.list[2].weather[0].icon
    var day3IconURL = `http://openweathermap.org/img/wn/${day3Icon}.png`
    $("#day3Icon").attr("src", day3IconURL)
     $("#day3Temp").text("Temp: " + response.list[2].main.temp + " \xB0F")
     $("#day3Humid").text("Humidity: " + response.list[2].main.temp + "%")

    // day 4 of 5
    var day4Date = moment().add(4, "day").format("L")
    $("#day4").text(day4Date)
    var day4Icon = response.list[3].weather[0].icon
    var day4IconURL = `http://openweathermap.org/img/wn/${day4Icon}.png`
    $("#day4Icon").attr("src", day4IconURL)
     $("#day4Temp").text("Temp: " + response.list[3].main.temp + " \xB0F")
     $("#day4Humid").text("Humidity: " + response.list[3].main.temp + "%")

     // day 5 of 5
    var day5Date = moment().add(5, "day").format("L")
    $("#day5").text(day5Date)
    var day5Icon = response.list[4].weather[0].icon
    var day5IconURL = `http://openweathermap.org/img/wn/${day5Icon}.png`
    $("#day5Icon").attr("src", day5IconURL)
    $("#day5Temp").text("Temp: " + response.list[4].main.temp + " \xB0F")
    $("#day5Humid").text("Humidity: " + response.list[4].main.temp + "%")

    console.log(response);
    }); //end of ajax call

    
}; //end of weekWeather function

}); //document.ready 



