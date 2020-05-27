(function(){
    'use strict';

    angular.module("NarrowItDownApp",[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {

        var ddo = {
            restrict: 'E',
            templateUrl: 'menuItemsList.html',
            scope: {
                found: '<',
                onRemove: '&',
                empty: '<'
            },
            controller:NarrowItDownController,
            controllerAs: 'narrowlist',
            bindToController: true
        };
      
        return ddo;

    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService){

        var narrowlist = this;
        narrowlist.searchTerm ="";
        narrowlist.empty = "";
        narrowlist.getMenuItems = function(searchTerm){
            if(searchTerm === ""){
                narrowlist.empty = "Nothing Found";
                narrowlist.found =[];
            }
            else{
                narrowlist.empty = "";
                MenuSearchService.getMatchedMenuItems(searchTerm)
                .then(function(response){
                    narrowlist.found = response;
                    //console.log(response);
                    if(narrowlist.found.length===0){
                        narrowlist.empty = "Nothing Found";
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
                
            }
            
        }
        
        narrowlist.removeItem = function (itemIndex) {
            narrowlist.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        var foundItems = [];
        service.getMatchedMenuItems = function(searchTerm){

            searchTerm = searchTerm.trim().toLowerCase();
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
                })

            .then(function (result) {
                // process result and only keep items that match
                if(searchTerm.length == 0){
                    foundItems = [];
                }
                else{
                    foundItems = [];
                    for(var i=0;i<result.data.menu_items.length;i++){
                        var des = result.data.menu_items[i].description.toLowerCase();
                        if (des.indexOf(searchTerm)!==-1){
                            var item = {
                                name: result.data.menu_items[i].name,
                                short_name: result.data.menu_items[i].short_name,
                                description: des
                            };
                            foundItems.push(item);
                        }
                    } 
                }  
                return foundItems;
            })
            .catch(function (error) {
                console.log(error);
            });
        };

    }
})();


