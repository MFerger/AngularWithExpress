angular.module('app')
  .controller('PiratesController', function($scope, PiratesService) {
  $scope.vm = {};

  $scope.getPirates = PiratesService.all().then(function(data){
    $scope.pirates = data.data;
  });

});
