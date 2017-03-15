angular.module('app', [])
    .controller('weather', ['$scope','$http', '$window', function($scope, $http, $window) {
        var vm = $scope;
        vm.location = 'Chicago';
        vm.OWKEY = 'APPID=4b3ff62e3ed31d05cb44a014d891b7e6'
        vm.GKEY = '&key=AIzaSyASnirjbcjHxfFlqm4_ZHzvGOQYdsaJEeg'
        vm.coords = {};

        init();

        function init() {
            geolocationCheck();
        };

        function geolocationCheck() {
          var confirm=$window.confirm('Would you like this website to use your location data?');
            if (confirm == true) {
              getLocation();
            } else {
              defaultLocation();
            }
        };

        function getLocation() {
            $http.get('http://ip-api.com/json')
                .then(function(success) {
                    vm.coords.latitude = success.data.lat;
                    vm.coords.longitude = success.data.lon;

                    vm.coords.trimLatitude = vm.coords.latitude.toString().substring(0, 5);
                    vm.coords.trimLongitude = vm.coords.longitude.toString().substring(0, 5);

                    convertCoords();
                    getCurrentWeather();
                    getForecast();
                })
                .catch(function(error) {
                    console.log('Can\'t obtain location information!');
                })
        };

        function defaultLocation() {
            vm.coords.trimLatitude = 41.88;
            vm.coords.trimLongitude = -87.64;

            getCurrentWeather();
            getForecast();
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

                    createPanel();
                })
                .catch(function() {
                    console.log('Unable to load weather forecast data!');
                });
        };

        function createPanel() {
            vm.convertedArray = [];

            for (var i = 1; i < vm.forecast.length; i++) {
                vm.convertedArray.push({
                    date: new Date(vm.forecast[i].dt * 1000).toString().split(' ')[0],
                    icon: vm.forecast[i].weather[0].icon,
                    conds: vm.forecast[i].weather[0].main,
                    max: vm.forecast[i].temp.max,
                    min: vm.forecast[i].temp.min
                });
            };
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
