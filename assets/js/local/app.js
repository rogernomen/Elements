(function () {
    var elementsApp = angular.module('elementsApp', [
        'mainController',
        'ui.bootstrap',
        'ngRoute',
        'smoothScroll',
        'home.controllers',
        'home.services',
        'ngAnimate',
        'blog.controllers',
        'blog.services',
        'contact.controllers',
        'contact.services',
        'smoothScroll',
        'angular-inview'
    ]);

    elementsApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/assets/js/local/Angular/pages/index.html'
            });
    }]);
}) ();