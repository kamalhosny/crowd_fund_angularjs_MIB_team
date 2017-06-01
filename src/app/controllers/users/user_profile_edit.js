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
      var data = {
        user: {
          user_name: $scope.user.user_name,
          email: $scope.user.email,
          age: $scope.user.age,
          bio: $scope.user.bio,
          linked_in: $scope.user.linked_in,
          facebook: $scope.user.facebook,
          github: $scope.user.github,
          profile_picture: $scope.user.profile_picture
        }
      };
      UserService.updateUser(data)
      .then(function(success) {
        toaster.pop('success', 'Your data was updated successfully! :)')
        $location.url('/users/'+$scope.user.id);
      }, function(error) {
        toaster.pop('error', 'Failed to update your data!')
      })
    };
  });
