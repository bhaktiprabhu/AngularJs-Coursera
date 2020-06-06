(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemDetailController', ItemDetailController);
    
    
    ItemDetailController.$inject = ['categoryitems'];
    function ItemDetailController(categoryitems) {
      var itemDetail = this;
      //var item = items[$stateParams.itemId];
      //itemDetail.shortName = item.short_name;
      console.log(categoryitems.data);
      itemDetail.catItems = categoryitems.data.menu_items;

      // itemDetail.quantity = item.quantity;
      // itemDetail.description = item.description;
    }
    
})();