(function () {
    angular.module('blog.services', [])
        .factory('Comments', ['$http', '$q', function ($http, $q) {
            function save(comment) {
                var deferred = $q.defer();

                var req = {
                    method  : 'POST',
                    url     : 'https://recruitment.elements.nl:8080/v1/comments/?format=json',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Token a7086c0744bd5c86f6b1d6198062f714e3bae972'
                    },
                    data : comment
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
                save : save
            }
        }]);
}) ();