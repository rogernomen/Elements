(function () {
    angular.module('blog.controllers', [])
        .controller('BlogCommentController', ['$scope', 'Comments', function ($scope, Comments) {
            $scope.BlogSaveComment = function (form) {
                if(form.$valid) {
                    var comment = {
                        "name"      : $scope.commentName,
                        "email"     : $scope.commentEmail,
                        "comment"   : $scope.commentComment
                    };

                    Comments.save(comment).then(function (promise) {
                       if(promise.status === 201) {
                           $scope.commentInserted = true;
                       }
                    });
                }
            }

        }]);
}) ();