(function () {
    angular.module('contact.controllers', [])
        .controller('ContactFormController', ['$scope', 'Contact', function ($scope, Contact) {
            var init = function () {
                $scope.successContactForm   = false;
                $scope.errorContactForm     = false;
            };

            $scope.sendContactForm = function (form) {
                if(form.$valid) {
                    var contactMessage = {
                        "name"      : $scope.contactName,
                        "email"     : $scope.contactEmail,
                        "phone"     : $scope.contactTelephone,
                        "message"   : $scope.contactMessage
                    };

                    Contact.send(contactMessage).then(function (promise) {
                        $scope.successContactForm = true;
                        _resetForm();
                    }, function(reason) {
                        $scope.errorContactForm = true;
                    });
                }
            };


            var _resetForm = function () {
                $scope.contactName      = '';
                $scope.contactEmail     = '';
                $scope.contactTelephone = '';
                $scope.contactMessage   = '';
            };

            init();

        }]);
}) ();