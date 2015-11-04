(function () {
    angular.module('mainController', [])
        .controller('mainController', ['$rootScope', '$scope', function ($rootScope, $scope) {
            $scope.careersInView    = false;
            $scope.homeInView       = false;
            $scope.blogInView       = false;
            $scope.contactInView    = false;
        }]);
}) ();