var app = angular.module('crowdFundApp', ['ng-token-auth', 'ipCookie']);

app.constant('CONFIG',{
  apiUrl: "http://localhost:3000"
});
app.config(function($authProvider, CONFIG) {
  $authProvider.configure([{
    default: {
      apiUrl: CONFIG.apiUrl
      // proxyIf: function() { window.isOldIE() },
      // authProviderPaths: {
      //   github:    '/auth/github',
      //   facebook:  '/auth/facebook',
      //   google:    '/auth/google_oauth2'
      // }
    }
  }, {

    admin: {
      apiUrl:                CONFIG.apiUrl,
      // proxyIf:               function() { window.isOldIE() },
      signOutUrl:            '/admin_auth/sign_out',
      emailSignInPath:       '/admin_auth/sign_in',
      // emailRegistrationPath: 'admin_auth',
      // accountUpdatePath:     '/admin_auth',
      // accountDeletePath:     '/admin_auth',
      passwordResetPath:     '/admin_auth/password',
      passwordUpdatePath:    '/admin_auth/password',
      tokenValidationPath:   '/admin_auth/validate_token'
      // authProviderPaths: {
      //   google:    '/admin_auth/google_oauth2'
      //   facebook:  '/admin_auth/facebook',
      //   github:    '/admin_auth/github',
      // }
    }
  }])
});
app.controller('IndexCtrl', function($scope, $auth) {
  $auth.validateUser().then(
    function(resp){
      console.log(resp);
    }
  )
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
