angular.module('crowdFundApp').controller('commentsCtrl',
  function ($scope, CommentsService, $auth, $stateParams) {
    CommentsService.getComments().then(
      function (success) {
        $scope.comments=success.data;
        for(var i=0; i<$scope.comments.length;i++){
          $scope.comments[i].created_at=new Date($scope.comments[i].created_at)
        }
      },
      function(err){
        console.log(err);
      }
    )
    $scope.addComment=function(){
      $scope.comment.campaign_id=$stateParams.id;
      CommentsService.createComment($scope.comment).then(
        function(success){
          console.log(success);
          $scope.comments.push(success.data);
        },
        function (error){
          console.log(errors);
        }
      )
    }
  });
