angular.module('crowdFundApp').controller('crowdFundController', function($scope, $auth) {
  $auth.validateUse/r().then(
    function(resp){}
  );
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
    .then(function(resp) {})
    .catch(function(resp) {});
  }
  $scope.handleLoginBtnClick = function() {

    $auth.submitLogin($scope.loginForm)
    .then(function(resp) {})
    .catch(function(resp) {});
  };
  $scope.handleSignOutBtnClick = function() {
    $auth.signOut()
    .then(function(resp) {})
    .catch(function(resp) {});
  };

  $scope.handleLoginBtnClickAdmin = function() {

    $auth.submitLogin($scope.loginFormAdmin, {config: 'admin'})
    .then(function(resp) {})
    .catch(function(resp) {});
  };
  $scope.handleSignOutBtnClickAdmin = function() {
    $auth.signOut({config: 'admin'})
    .then(function(resp) {})
    .catch(function(resp) {});
  };

});
