(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })
    
      // Premade list page
      .state('categoriesList', {
        url: '/categories-list',
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: 'CategoriesController as categoriesList',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories()
            .catch(function (error) {
              console.log(error);
          });
          }]
        }
      })
    
      .state('itemDetail', {
        url: '/item-detail/{itemId}',
        templateUrl: 'src/menuapp/templates/item-detail.template.html',
        controller: "ItemDetailController as itemDetail",
        resolve: {
          categoryitems: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
              //console.log(items.data[$stateParams.itemId].short_name);
              return MenuDataService.getAllCategories()
              .then(function(items){
                return MenuDataService.getItemsForCategory(items.data[$stateParams.itemId].short_name)
              })
              .catch(function (error) {
                console.log(error);
            });
          }]
        }
      });
    
    }
    
    })();