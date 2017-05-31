angular.module('crowdFundApp').controller('userEdit',
function($scope, UserService, $sce, $auth, toaster, $location, $stateParams) {
  UserService.getUser().then(
    function(success) {
      $scope.user = success.data;
      $scope.returnGender = function(gender) {
        if (gender == true) {
          return 'Male';
        }
        return 'Female';
      }
    },
    function(error) {
      toaster.pop('error', 'Failed to get user data!')
    });

    $scope.UpdateUserData = function () {
      UserService.updateUser($scope.user)
      .then(function(success) {
        toaster.pop('success', 'Your data was updated successfully! :)')
        $location.url('/users/'+$scope.user.id);
      }, function(error) {
        toaster.pop('error', 'Failed to update your data!')
      })
    };
  });
