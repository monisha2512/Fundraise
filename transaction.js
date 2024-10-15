angular.module('dashboardApp')
  .controller('TransactionsController', function($scope, $http) {
    $scope.referralCode = 'ABC1234'; // Replace with actual referral code

    // Function to fetch transaction data
    $scope.fetchTransactions = function() {
      $http.get('/api/transactions/' + $scope.referralCode)
        .then(function(response) {
          $scope.transactions = response.data;
        })
        .catch(function(error) {
          console.error('Error fetching transactions:', error);
        });
    };

    // Initial call to fetch transactions
    $scope.fetchTransactions();
  });