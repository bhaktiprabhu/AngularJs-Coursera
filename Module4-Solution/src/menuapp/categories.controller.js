(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
    var categoriesList = this;
    console.log(items.data);
    categoriesList.items = items.data;
}

})();