(function () {
    "use strict";
    
    angular.module('public')
    .service('favItemService', favItemService);
    
    
    favItemService.$inject = ['$http', 'ApiPath'];
    function favItemService($http, ApiPath) {
      var service = this;

      var favItem;
      var userinfo;
      var signUpStatus = false;
    
      service.getFavItem = function (short_name) {
        return $http.get(ApiPath + '/menu_items/'+short_name+'.json')
        .then(function (response) {
            favItem = response.data;
            //console.log(favItem);
            //return response.data;
            return false;
        })
        .catch(function (error) {
            //console.log(error);
            return true;
        })
      };

      service.saveInfo = function(info,status){
          userinfo = info;
          signUpStatus = status;
      }
      
      service.getInfo = function(){
          return userinfo;
      } 

      service.favInfo = function(){
          return favItem;
      }

      service.getSignUpStatus = function(){
          return signUpStatus;
      }
    
    }

})();