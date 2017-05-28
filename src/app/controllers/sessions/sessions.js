angular.module('crowdFundApp').controller('sessionsController', function($scope, $auth, toaster, $location) {
  $auth.validateUser().then(
    function(success) {
      $scope.user = success;
    },
    function(err) {
      $scope.user = null;
    }
  );
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
        toaster.pop('success', "Congratulations!, you've become one of us now ")
      })
      .catch(function(resp) {});
  }
  $scope.handleLoginBtnClick = function() {
    $auth.submitLogin($scope.loginForm)
      .then(function(resp) {
        $scope.user = resp;
        toaster.pop('success', "welcome back honey!");
        $location.url('/');
      })
      .catch(function(resp) {});
  };
  $scope.handleSignOutBtnClick = function() {
    $auth.signOut()
      .then(function(resp) {
        $scope.user = null;
        toaster.pop('success', "we will miss u :( ")
      })
      .catch(function(resp) {
        toaster.pop('error', "cant signout twice Mr.smart")
      });
  };

  $scope.handleLoginBtnClickAdmin = function() {

    $auth.submitLogin($scope.loginFormAdmin, {
        config: 'admin'
      })
      .then(function(resp) {
        $scope.admin = resp;
        toaster.pop('success', "Welcome back BOSS !")
      })
      .catch(function(resp) {});
  };
  $scope.handleSignOutBtnClickAdmin = function() {
    $auth.signOut({
        config: 'admin'
      })
      .then(function(resp) {
        $scope.admin = null;
        toaster.pop('success', "Woohoooooo, time to go home")
      })
      .catch(function(resp) {});
  };

});
