(function () {
    angular.module('home.services', [])
        .factory('carouselSlides', ['$http', '$q', function ($http, $q) {
            var status = false;
            function getHomeSlides() {
                var deferred = $q.defer();

                var req = {
                    method  : 'GET',
                    url     : 'https://recruitment.elements.nl:8080/v1/carousel/?format=json',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Token a7086c0744bd5c86f6b1d6198062f714e3bae972'
                    }
                };

                $http.defaults.useXDomain = true;
                $http(req)
                    .then(function (data) {
                        deferred.resolve(data);
                    })
                    .catch(function (data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }

            return {
                getHomeSlides   : getHomeSlides
            }
        }])
        .factory('companies', ['$http', '$q', function ($http, $q) {
            function getCompanies() {
                var deferred = $q.defer();

                var req = {
                    method  : 'GET',
                    url     : 'https://recruitment.elements.nl:8080/v1/company/?format=json',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Token a7086c0744bd5c86f6b1d6198062f714e3bae972'
                    }
                };

                $http.defaults.useXDomain = true;
                $http(req)
                    .then(function (data) {
                        deferred.resolve(data);
                    })
                    .catch(function (data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }

            return {
                getCompanies : getCompanies
            }
        }]);
}) ();