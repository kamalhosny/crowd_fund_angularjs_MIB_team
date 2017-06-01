(function() {

  angular.module('crowdFundApp').controller('userShow',
    function($scope, UserService, toaster, $sce, $auth, $stateParams, $location) {
      $scope.returnGender = function(gender) {
        if (gender == true) {
          return 'Male';
        }
        return 'Female';
      }

      UserService.getUser().then(function(success) {
        $scope.user = success.data;
      }, function(error) {
        toaster.pop('error', 'Failed to get user data!')
      });

      $scope.removeUser = function() {
        UserService.deleteUser()
        $location.url('/sign_in');
        toaster.pop('error', 'Profile was deleted, we will miss you! :()')
      }
    });
}).call(this);
