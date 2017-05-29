angular.module('crowdFundApp', ['ng-token-auth', 'ipCookie','ui.router', 'ngFileUpload'])
.config(function($authProvider, $stateProvider, $locationProvider, CONFIG) {
  $authProvider.configure([{
    default: {
      apiUrl: CONFIG.apiUrl
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
    }
  }])


  $locationProvider.html5Mode(true);

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
    name:'admin_sign_in',
    url:'/admins/sign_in',
    templateUrl:'app/views/sessions/session_admin_sign_in.html'
  });
  // $stateProvider.state({
  //   name:'campaigns',
  //   url:'/campaigns',
  //   templateUrl:'app/campaigns/index_of_campaigns.html',
  //   // resolve: {
  //   //   auth: function($auth) {
  //   //     return $auth.validateUser();
  //   //   }},
  //   controller: 'campaignsController'
  //   })
  $stateProvider.state({
    name:'campaigns_create',
    url:'/campaigns/new',
    templateUrl:'app/campaigns/create_campaign.html',
    controller: 'campaignsController'
  });

});
