(function () {
    angular.module('home.controllers', [])
        .controller('CarouselController', ['$rootScope', '$scope', 'carouselSlides', function ($rootScope, $scope, carouselSlides) {
            $scope.myInterval       = 2000;
            $scope.noWrapSlides     = false;
            $scope.slides           = [];

            carouselSlides.getHomeSlides().then(function (promise) {
                var result = promise.data.results;
                for(var idx = 0, limit = result.length; idx < limit; idx++) {
                    $scope.slides.push({
                        image       : result[idx].image,
                        title       : result[idx].title,
                        subtitle    : result[idx].subtitle,
                        action      : result[idx].action,
                        actionUrl   : result[idx].action_url
                    });
                }

            });

        }])
        .controller('CompaniesController', ['$scope', 'companies', function ($scope, companies) {
            $scope.companies = [];

            companies.getCompanies().then(function (promise) {
               var result = promise.data.results;
                for(var idx = 0, limit = result.length; idx < limit; idx++) {
                    $scope.companies.push({
                        id      : result[idx].id,
                        logo    : result[idx].logo,
                        logo_x2 : result[idx].logo_x2,
                        name    : result[idx].name,
                        website : result[idx].website
                    });
                }
            });
        }]);
}) ();