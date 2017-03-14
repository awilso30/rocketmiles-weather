angular.module('app', [])
    .controller('weather', ['$scope','$http', function($scope,$http) {
        var vm = $scope;
        vm.location = 'chicago';

        init();

        function init() {
            geolocationCheck();
        };

        function geolocationCheck() {
            if ("geolocation" in navigator) {
              getLocation();
            } else {
              console.log('Your browser doesn\'t support geolocation');
            }
        }

        function getLocation() {
            vm.coords = {};
            var position;

            navigator.geolocation.getCurrentPosition(success, error);

            function success(position) {
                console.log('Geolocation Success!');
                vm.coords.latitude = position.coords.latitude;
                vm.coords.longitude = position.coords.longitude;

                var latitudeString = vm.coords.latitude.toString();
                var longitudeString = vm.coords.longitude.toString();

                vm.coords.trimLatitude = latitudeString.substring(0, 5);
                vm.coords.trimLongitude = longitudeString.substring(0, 5);

                getCurrentWeather();
                getForecast();
            };

            function error (msg) {
                console.log('Can\'t obtain location information.. loading default!')

                vm.coords.trimLatitude = 41.88;
                vm.coords.trimLongitude = -87.64;

                getCurrentWeather();
                getForecast();
            };
        };

        function getCurrentWeather() {
            $http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + vm.coords.trimLatitude + '&lon=' + vm.coords.trimLongitude + '&units=imperial&APPID=4b3ff62e3ed31d05cb44a014d891b7e6')
                .success(function(response) {
                    console.log('Current Weather Success!');
                    console.log(response);

                    vm.current = {};

                    vm.current.city = response.name;
                    vm.current.temp = response.main.temp;
                    vm.current.conditions = response.weather[0].main;
                    vm.current.icon = response.weather[0].icon;
                })
                .catch(function() {
                    console.log('Unable to load current weather data!');
                });
        };

        function getForecast() {
            $http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + vm.coords.trimLatitude + '&lon=' + vm.coords.trimLongitude + '&cnt=7&units=imperial&APPID=4b3ff62e3ed31d05cb44a014d891b7e6')
                .success(function(response) {
                    console.log('Forecast Success!');

                    vm.forecast = response.list;
                })
                .catch(function() {
                    console.log('Unable to load weather forecast data!');
                });
        };

        vm.changeLocation = function() {
            vm.url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=' + vm.location + '&key=AIzaSyASnirjbcjHxfFlqm4_ZHzvGOQYdsaJEeg';

            getGoogleCoords();
        };

        function getGoogleCoords() {
            $http.get(vm.url)
                .success(function(response) {
                    console.log('Google Coords Success!');

                    vm.coords.trimLatitude = response.results[0].geometry.location.lat;
                    vm.coords.trimLongitude = response.results[0].geometry.location.lng;

                    getCurrentWeather();
                    getForecast();
                })
                .catch(function() {
                    console.log('Unable to google location data!');
                });
        };

}]);
