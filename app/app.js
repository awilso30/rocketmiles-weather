angular.module('app', [])
    .controller('weather', ['$scope','$http', function($scope,$http) {
        var vm = $scope;

        // vm.latitude = 41.88;
        // vm.longitude = -87.64;

        // DAY TITLES
        // getdate, day1 = today
        // add 1 to each day
        // add to Array
        // ng repeat day titles

        init();

        function init() {
            getLocation();
        };

        function getLocation() {
            if ("geolocation" in navigator) {
              getPosition();
            } else {
              console.log('Your browser doesn\'t support geolocation');
            }
        }

        function getPosition() {
            var position;

            function success(p) {
              position = p;
              doSomethingWithPosition();
          };

            function error (msg) {
              //log error codes etc here
              doSomethingElseWithPosition();
          };

            navigator.geolocation.getCurrentPosition(success, error);

            function doSomethingWithPosition(){
               var longitude = position.coords.longitude; // position is defined here
               console.log(longitude);
           };

            function doSomethingElseWithPosition(){
                vm.coords = {};

                vm.coords.latitude = 41.88;
                vm.coords.longitude = -87.64;

                getCurrentWeather();
                getForecast();
           };


        };

        // function locationDefault() {
        //     vm.coords = {};
        //
        //     vm.coords.latitude = 41.88;
        //     vm.coords.longitude = -87.64;
        //
        //     getCurrentWeather();
        //     getForecast();
        // };

        // function getPosition() {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //         $scope.$apply(function() {
        //
        //             vm.coords = {};
        //
        //             vm.coords.latitude = position.coords.latitude;
        //             vm.coords.longitude = position.coords.longitude;
        //
        //             var latitudeString = vm.coords.latitude.toString();
        //             var longitudeString = vm.coords.longitude.toString();
        //
        //             vm.coords.trimLatitude = latitudeString.substring(0, 5);
        //             vm.coords.trimLongitude = longitudeString.substring(0, 5);
        //
        //             getCurrentWeather();
        //             getForecast();
        //         });
        //     });
        // };

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
