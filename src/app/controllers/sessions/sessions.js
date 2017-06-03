(function() {

  angular.module('crowdFundApp').controller('sessionsController', function($scope, $auth, toaster, $state) {
    $auth.validateUser().then(
      function(resp) {
        if (resp.configName === "default") {
          $scope.user = resp;
          $scope.admin = null;
        } else if (resp.configName === "admin") {
          $scope.admin = resp;
          $scope.user = null;
        }
      },
      function(resp) {
        $scope.user = null;
        $scope.admin = null;
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
          $state.go('landing');
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
          $state.go('admin_campaign');
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
}).call(this);
