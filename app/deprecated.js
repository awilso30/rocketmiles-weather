$(document).ready(function() {
// Dynamic buttons
var inputs = document.getElementsByTagName('input');

for (var i = 0, len = inputs.length; i < len; i++) {
  input = inputs[i];
  input.onmouseover = function() {
    this.setAttribute('data-orig-image', this.getAttribute('src'));
    this.src = this.getAttribute('data-alt-image');
  };
  input.onmouseout = function() {
    this.src = this.getAttribute('data-orig-image');
  };
};

//Get user's current location
navigator.geolocation.getCurrentPosition(function(position) {

  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var latitudeString = latitude.toString();
  var longitudeString = longitude.toString();

  var trimLatitude = latitudeString.substring(0, 5);
  var trimLongitude = longitudeString.substring(0, 5);

//Get weather for user's current location
var getWeather = $.ajax({
  type: 'GET',
  url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + trimLatitude + "&lon=" + trimLongitude + "&APPID=4b3ff62e3ed31d05cb44a014d891b7e6"
});

//Once received do stuff with data!
getWeather.done(function(data) {
//Set user location on page
var location = data.name;
$(".location").html(location);
//Set conditions
var conditions = data.weather[0].main;
$(".conditions").html(conditions);

var temp = data.main.temp;

var kelvinDegrees = temp;
var imperialDegrees = ((kelvinDegrees * (9 / 5)) - 459.67);
var truncatedImperial = Math.floor(imperialDegrees * 100) / 100;
var metricDegrees = kelvinDegrees - 273.15;
var truncatedMetric = Math.floor(metricDegrees * 100) / 100;

$(".degrees").html(truncatedImperial);

var shown = 1;
$(".changeUnits").click(function() {

  if (shown == 1) {
    $("#fahrenheit").css("display", "none");
    $("#celsius").css("display", "inline-block");
    $(".degrees").html(truncatedMetric);
    shown = 2;

  } else {
    $("#celsius").css("display", "none");
    $("#fahrenheit").css("display", "inline-block");
    $(".degrees").html(truncatedImperial);
    shown = 1;
  }
});

if (kelvinDegrees > 291.48) {
  $('.weather').removeClass('weather-temperate');
  $('.weather').removeClass('weather-cold');
  $('.weather').addClass('weather-hot');
} else if (kelvinDegrees < 291.48 && kelvinDegrees > 269.26) {
  $('.weather').removeClass('weather-hot');
  $('.weather').removeClass('weather-cold');
  $('.weather').addClass('weather-temperate');
} else {
  $('.weather').removeClass('weather-temperate');
  $('.weather').removeClass('weather-hot');
  $('.weather').addClass('weather-cold');
}

});

});

// Get user defined location on click/prompt here
$(".changeLocation").on("click", function() {
//Define new location via prompt
var newLocation = prompt("Enter your destination, please:");
//Set new location on the page
$(".location").html(newLocation);
//Get new weather data based on new location
var getWeather = $.ajax({
  type: 'GET',
  url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q='" + newLocation + "&APPID=4b3ff62e3ed31d05cb44a014d891b7e6",
});
// Once received - repeat previous process to set new background image, etc
getWeather.done(function(data) {
  var conditions = data.weather[0].main;
  $(".conditions").html(conditions);

  temp = data.main.temp;

  var kelvinDegrees = temp;
  var imperialDegrees = ((kelvinDegrees * (9 / 5)) - 459.67);
  var truncatedImperial = Math.floor(imperialDegrees * 100) / 100;
  var metricDegrees = kelvinDegrees - 273.15;
  var truncatedMetric = Math.floor(metricDegrees * 100) / 100;

  $(".degrees").html(truncatedImperial);

  var shown = 1;
  $(".changeUnits").click(function() {

    if (shown == 1) {
      $("#fahrenheit").css("display", "none");
      $("#celsius").css("display", "inline-block");
      $(".degrees").html(truncatedMetric);
      shown = 2;

    } else {
      $("#celsius").css("display", "none");
      $("#fahrenheit").css("display", "inline-block");
      $(".degrees").html(truncatedImperial);
      shown = 1;
    }
  });

  if (kelvinDegrees > 291.48) {
    $('.weather').removeClass('weather-temperate');
    $('.weather').removeClass('weather-cold');
    $('.weather').addClass('weather-hot');
  } else if (kelvinDegrees < 291.48 && kelvinDegrees > 269.26) {
    $('.weather').removeClass('weather-hot');
    $('.weather').removeClass('weather-cold');
    $('.weather').addClass('weather-temperate');
  } else {
    $('.weather').removeClass('weather-temperate');
    $('.weather').removeClass('weather-hot');
    $('.weather').addClass('weather-cold');
  }
});
});

});
