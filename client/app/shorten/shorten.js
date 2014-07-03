angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function () {
    $scope.loading = true;

    Links.addLink($scope.link).then(function (data) {
      $scope.loading = false;
    }).catch(function(err) {
      console.error(err);
    });
  };


});


// on button click
// need to load the spiffygif
// once we return from post request
// turn off spiffygif
