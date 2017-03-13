angular.module('app', [])
    .controller('weather', ['$scope','$http', function($scope,$http) {
        var vm = $scope;

        init();

        function init() {
            getLocation();
        };

        function getLocation() {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.$apply(function() {

                    vm.coords = {};

                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    var latitudeString = latitude.toString();
                    var longitudeString = longitude.toString();

                    vm.coords.trimLatitude = latitudeString.substring(0, 5);
                    vm.coords.trimLongitude = longitudeString.substring(0, 5);

                    getCurrentWeather();
                    getForecast();
                });
            });
        };

        function getCurrentWeather() {
            $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + vm.coords.trimLatitude + '&lon=' + vm.coords.trimLongitude + '&units=imperial&APPID=4b3ff62e3ed31d05cb44a014d891b7e6')
                .success(function(response) {
                    console.log('Success!');

                    vm.current = {};

                    vm.current.city = response.name;
                    vm.current.temp = response.main.temp;
                    vm.current.conditions = response.weather[0].main;
                })
                .catch(function() {
                    console.log('Unable to load current weather data!');
                });
        };

        function getForecast() {
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + vm.coords.trimLatitude + '&lon=' + vm.coords.trimLongitude + '&cnt=7&units=imperial&APPID=4b3ff62e3ed31d05cb44a014d891b7e6')
                .success(function(response) {
                    console.log('Success!');

                    vm.responseList = response.list;
                })
                .catch(function() {
                    console.log('Unable to load weather forecast data!');
                });
        };

}]);
