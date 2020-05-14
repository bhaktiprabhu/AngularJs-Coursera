(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.items = ""
        $scope.CheckIfTooMuch = function () {
            console.log($scope.items)
            if ($scope.items == "")
            {
                $scope.message = "Please enter data first"
            }
            else{
                var count = $scope.items.split(',').length
                
                if (count<=3){
                    $scope.message = "Enjoy!"
                }
                else{
                    $scope.message = "Too Much!"
                }
            }
          
        };
    }  
    
})();