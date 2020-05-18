(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var BuyList = this;
        
        BuyList.items = ShoppingListCheckOffService.getBuyItems();

        BuyList.moveItem = function (itemIndex,itemName,itemQuantity) {
            ShoppingListCheckOffService.moveItem(itemIndex,itemName,itemQuantity);

        }
        
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var BoughtList = this;
        
        BoughtList.items = ShoppingListCheckOffService.getBoughtItems();
    }  

    function ShoppingListCheckOffService() {
        var service = this;
      
        // List of shopping items
        var ToBuy = [
            {
              name: "Coke Bottles",
              quantity: "2"
            },
            {
              name: "Donuts",
              quantity: "20"
            },
            {
              name: "Cookies",
              quantity: "30"
            },
            {
              name: "Chocolates",
              quantity: "5"
            },
            {
              name: "Strawberries",
              quantity: "10"
            },
            {
              name: "Chips Packets",
              quantity: "4"
            }

          ];
          var Bought = [];
      
        service.moveItem = function (itemIndex,itemName, quantity) {
            ToBuy.splice(itemIndex, 1);
            var item = {
              name: itemName,
              quantity: quantity
            };
            Bought.push(item);
        };
      
        service.getBuyItems = function () {
            return ToBuy;
        };

        service.getBoughtItems = function () {
            return Bought;
        };
      }
    
})();