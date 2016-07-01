(function(){
    'use strict';
    function NavCtrl($cookies, $scope, trelloService) {

        var authenticationSuccess = function () {
            $cookies.put('trello_authorized', true);
        };
        var authenticationFailure = function () {
            console.log('Failed authentication');
        };
        $scope.loadedBoards = null;
        $scope.authorised = Trello.authorized();
        if ( !$scope.authorised) {
            Trello.authorize({
                //type: popup,
                name: 'Trello Dashboard',
                scope: {
                    read: true,
                    write: true },
                //expiration: never,
                success: authenticationSuccess,
                error: authenticationFailure
            });
        }

        $scope.userData = trelloService.getUser();

    }
angular.module('trello2App')
    .controller('NavCtrl', NavCtrl);


})();
