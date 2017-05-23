angular.module('crowdFundApp', ['ng-token-auth', 'ipCookie','ui.router'])
.config(function($authProvider, $stateProvider, CONFIG) {
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



  $stateProvider.state(
    {
    name: 'sign_in',
    url: '/sign_in',
    templateUrl: 'app/views/sessions/session_sign_in.html'
  });
  $stateProvider.state(
    {
    name: 'sign_up',
    url: '/sign_up',
    templateUrl: 'app/views/sessions/session_sign_up.html'
  });
  $stateProvider.state({
    name:'sign_in_admin',
    url:'/admins/sign_in',
    templateUrl:'app/views/sessions/session_admin_sign_in.html'
  });
});
