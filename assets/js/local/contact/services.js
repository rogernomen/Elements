(function () {
    angular.module('contact.services', [])
        .factory('Contact', ['$http', '$q', function ($http, $q) {
            function send(message) {
                var deferred = $q.defer();

                var req = {
                    method  : 'POST',
                    url     : 'https://recruitment.elements.nl:8080/v1/message/?format=json',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Token a7086c0744bd5c86f6b1d6198062f714e3bae972'
                    },
                    data : message
                };

                $http.defaults.useXDomain = true;
                $http(req)
                    .then(function (data) {
                        console.log('success' +data);
                        deferred.resolve(data);
                    })
                    .catch(function (data) {
                        console.log(data);
                        deferred.reject(data);
                    });
                return deferred.promise;
            }

            return {
                send : send
            }
        }]);
}) ();