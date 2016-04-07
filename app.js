
var app = angular.module('gifApp', []);

app.controller('GifController', function($scope, $http){

  $scope.superGif = {};

  $scope.getGif = function(){
    $http.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC").then(function(response){
      console.log(response);
      $scope.superGif = response.data.data;
      console.log($scope.superGif);
    });
  };

});
