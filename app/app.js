angular.module('app', [])
    .controller('weather', ['$scope','$http', function($scope,$http) {
        var vm = $scope;
        vm.location = 'Chicago';
        vm.OWKEY = 'APPID=4b3ff62e3ed31d05cb44a014d891b7e6'
        vm.GKEY = '&key=AIzaSyASnirjbcjHxfFlqm4_ZHzvGOQYdsaJEeg'

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

                vm.coords.latitude = position.coords.latitude;
                vm.coords.longitude = position.coords.longitude;

                convertCoords();
                getCurrentWeather();
                getForecast();
            };

            function error (msg) {
                console.log('Can\'t obtain location information.. loading default!');

                vm.coords.trimLatitude = 41.88;
                vm.coords.trimLongitude = -87.64;

                getCurrentWeather();
                getForecast();
            };
        };

        function convertCoords() {
            vm.coords.trimLatitude = vm.coords.latitude.toString().substring(0, 5);
            vm.coords.trimLongitude = vm.coords.longitude.toString().substring(0, 5);
        };

        function getCurrentWeather() {
            $http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + vm.coords.trimLatitude + '&lon=' + vm.coords.trimLongitude + '&units=imperial&' + vm.OWKEY)
                .success(function(response) {

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
            $http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + vm.coords.trimLatitude + '&lon=' + vm.coords.trimLongitude + '&cnt=7&units=imperial&' + vm.OWKEY)
                .success(function(response) {

                    vm.forecast = response.list;
                })
                .catch(function() {
                    console.log('Unable to load weather forecast data!');
                });
        };

        vm.changeLocation = function() {
            vm.url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=' + vm.location + vm.GKEY;

            getGoogleCoords();
        };

        function getGoogleCoords() {
            $http.get(vm.url)
                .success(function(response) {

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
