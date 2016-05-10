angular.module('app')
  .controller('PiratesController', function($scope, PiratesService) {
  $scope.vm = {};

  $scope.createPirates = function(pirate){
    PiratesService.create(pirate);
  }

  $scope.getPirates = PiratesService.all().then(function(data){
    $scope.pirates = data.data;
  });

});
