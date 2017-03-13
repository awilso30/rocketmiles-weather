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
            $http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' + vm.coords.trimLatitude + '&lon=' + vm.coords.trimLongitude + '&cnt=5&units=imperial&APPID=4b3ff62e3ed31d05cb44a014d891b7e6')
                .success(function(response) {
                    console.log('Success!');

                    // days array - to ngrepeat
                    //
                    // day1

                    vm.forecast = {};

                    vm.forecast.cond = response.list[0].weather[0].main;
                    vm.forecast.minTemp = response.list[0].main.temp_min;
                    vm.forecast.maxTemp = response.list[0].main.temp_max;

                    var iconCode = response.list[0].weather[0].icon;
                    var url = 'http://openweathermap.org/img/w/' + iconCode + '.png';

                    vm.forecast.icon = url;

                    // response.list = array of day objects
                    //
                    // for each day in array - create panel

                    vm.daysList = response.list;
 
                })
                .catch(function() {
                    console.log('Unable to load weather forecast data!');
                });
        };

}]);
