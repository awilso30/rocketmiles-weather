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
                    vm.location = {};
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    var latitudeString = latitude.toString();
                    var longitudeString = longitude.toString();

                    vm.location.trimLatitude = latitudeString.substring(0, 5);
                    vm.location.trimLongitude = longitudeString.substring(0, 5);
                    getWeather();
                });
            });
        };

        function getWeather() {
            $http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' + vm.location.trimLatitude + '&lon=' + vm.location.trimLongitude + '&APPID=4b3ff62e3ed31d05cb44a014d891b7e6')
                .success(function(response) {
                    console.log(response);
                })
                .catch(function() {
                    console.log('Unable to load weather information!');
                });
        };

}]);
