var app = angular.module('donationApp', []);

app.controller('DonationController', function($scope) {
  $scope.currentPage = 'home';

  $scope.isActive = function(page) {
    return $scope.currentPage === page;
  };
});