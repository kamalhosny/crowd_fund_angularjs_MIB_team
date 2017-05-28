angular.module('crowdFundApp').factory('CommentsService', function($http, $stateParams, CONFIG) {
  base_url = CONFIG.apiUrl + '/campaign';
  return {
    getComments: function() {
      return $http.get(base_url + "/" + $stateParams.id + '/comments.json');
    },
    createComment: function (data) {
      return $http.post(base_url + "/" + $stateParams.id + '/comments.json', data);
    }
  }
})
