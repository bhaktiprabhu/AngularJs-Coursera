(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoriesList.itemDetail', {
      templateUrl: 'src/menuapp/templates/item-detail.template.html',
      controller: "ItemDetailController as itemDetail",
      bindings: {
        categoryitems: '<'
      }
    });
    
    })()