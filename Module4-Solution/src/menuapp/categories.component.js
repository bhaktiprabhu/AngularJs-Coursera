(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoriesList', {
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'CategoriesController as categoriesList',
      bindings: {
        items: '<'
      }
    });
    
})()