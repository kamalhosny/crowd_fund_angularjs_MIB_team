(function(){
  angular.module('crowdFundApp').controller('commentsCtrl',
    function($scope, CommentsService, $auth, $stateParams) {
      CommentsService.getComments().then(
        function(success) {
          $scope.comments = success.data;
          for (var i = 0; i < $scope.comments.length; i++) {
            $scope.comments[i].created_at = new Date($scope.comments[i].created_at)
          }
        },
        function(err) {
          console.log(err);
        }
      );

      $scope.addComment = function() {
        $scope.comment.campaign_id = $stateParams.id;
        CommentsService.createComment($scope.comment).then(
          function(success) {
            $scope.comments.push(success.data);
          },
          function(error) {
          }
        )
      };

      $scope.removeComment=function(id){
        CommentsService.deleteComment(id).then(
          function(success){
            var i = $scope.comments.findIndex(function(comment) {
              return id === comment.id;
            });
            $scope.comments.splice(i, 1);
          },
          function(error){
          }
        )
      };
      $scope.editComment=function(id){
        var i = $scope.comments.findIndex(function(comment) {
          return id === comment.id;
        });
        CommentsService.updateComment(id,$scope.comments[i]).then(
          function(success){
            $scope.comments[i]=success.data
          }
        )
      }

    });
}).call(this);
