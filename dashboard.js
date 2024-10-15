angular.module('dashboardApp', [])
  .controller('DashboardController', function($scope) {
    $scope.user = {
      name: '{{user.name}}', // Replace with actual user name
      goalAchieved: 1000,
      totalGoal: 2000000,
      referralCode: '{{user.referralcode}}'
    };

    // ... other properties and functions     
  });
