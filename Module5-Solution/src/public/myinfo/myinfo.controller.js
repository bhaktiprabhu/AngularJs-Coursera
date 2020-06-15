(function () {

    "use strict";

    angular.module('public')
    .controller('myInfoController', myInfoController);

    myInfoController.$inject = ['favItemService','ApiPath'];

    function myInfoController(favItemService, ApiPath) {
      var myInfoCtrl = this;

      myInfoCtrl.basePath = ApiPath;

      myInfoCtrl.signUpStatus = favItemService.getSignUpStatus();
      
      myInfoCtrl.userinfo = favItemService.getInfo();

      myInfoCtrl.favItem = favItemService.favInfo();
    }

})();