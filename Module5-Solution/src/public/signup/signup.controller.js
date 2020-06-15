(function () {

    "use strict";

    angular.module('public')
    .controller('signUpController', signUpController);

    signUpController.$inject = ['favItemService'];

    function signUpController(favItemService) {
      var reg = this;
      reg.completed = false;

      reg.submit = async function () {
       await favItemService.getFavItem(reg.user.menunum)
        .then(function(response){
          reg.wrongMenunum = response;
        });
        
        if(!reg.wrongMenunum){
          reg.completed = true;
          favItemService.saveInfo(reg.user,reg.completed);  
        }
      };
    }

})();