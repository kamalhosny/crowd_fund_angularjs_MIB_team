angular.module('crowdFundApp').controller('crowdFundController', function($scope, $auth) {
  $auth.validateUser().then(
    function(resp){
      console.log(resp);
    }
  );
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
    .then(function(resp) {
      // handle success response
      console.log(resp);
    })
    .catch(function(resp) {
      // handle error response
      console.log(resp);
    });
  }
  $scope.handleLoginBtnClick = function() {
    console.log("test");
    $auth.submitLogin($scope.loginForm)
    .then(function(resp) {
      // handle success response
      console.log(resp);
    })
    .catch(function(resp) {
      // handle error response
      console.log(resp);
    });
  };
  $scope.handleSignOutBtnClick = function() {
    $auth.signOut()
    .then(function(resp) {
      // handle success response

      console.log(resp);
    })
    .catch(function(resp) {
      // handle error response
      console.log(resp);
    });
  };

  $scope.handleLoginBtnClickAdmin = function() {
    console.log("test");
    $auth.submitLogin($scope.loginFormAdmin, {config: 'admin'})
    .then(function(resp) {
      // handle success response
      console.log(resp);
    })
    .catch(function(resp) {
      // handle error response
      console.log(resp);
    });
  };
  $scope.handleSignOutBtnClickAdmin = function() {
    $auth.signOut({config: 'admin'})
    .then(function(resp) {
      // handle success response

      console.log(resp);
    })
    .catch(function(resp) {
      // handle error response
      console.log(resp);
    });
  };

});
