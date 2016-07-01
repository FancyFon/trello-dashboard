(function () {
    'use strict';
    function MainCtrl($cookies, $scope, trelloService) {

        $scope.userData = trelloService.getUser();

        $scope.getBoards = function (organizationId) {
            $scope.boards = trelloService.getBoards(organizationId);
            $cookies.put('chosenOrganization', organizationId);
        };

        $scope.getBoard = function (id) {
            $cookies.put('chosenBoard', id);
        };

        $scope.getMember = function (userId) {
            return trelloService.getMember(userId);
        };

        $scope.init = function () {
           if ($cookies.get('chosenBoard')) {
             $scope.chosenBoard = $cookies.get('chosenBoard');
           }

           if ($cookies.get('chosenOrganization')) {
             $scope.chosenOrganization = $cookies.get('chosenOrganization');
           }

           $scope.organizations = trelloService.getOrganisations();
           $scope.getBoards($scope.chosenOrganization);
        };
        $scope.setColor = function (user, background) {
            if (user === 'RG' && background) {
                return  '#F44336';
            } else if (user === 'PC' && background) {
                return '#283593';
            } else if (user === 'PS' && background) {
                return '#4CAF50';
            } else if (user === 'OT' && background) {
                return '#FFC107';
            } else if (user === 'GJ' && background) {
                return '#BCAAA4';
            }

            if (user === 'RG' && !background) {
                return  '#FFFFFF';
            } else if (user === 'PC' && !background) {
                return '#FFFFFF';
            } else if (user === 'PS' && !background) {
                return '#FFFFFF';
            } else if (user === 'OT' && !background) {
                return '#FFFFFF';
            } else if (user === 'GJ' && !background) {
                return '#FFFFFF';
            }
        };


    }

    angular.module('trello2App')
        .controller('MainCtrl', MainCtrl);


})();
