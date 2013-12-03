
angular.module('coffeeHouseApp', ['ngRoute', 'ngAnimate'])
	.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    })

var app = angular.module('coffeeHouseApp');

app.controller('HomeCtrl', function(){
	console.log('HomeCtrl')
});

app.controller('AboutCtrl', function($scope){
	console.log('AboutCtrl')
	$scope.menu = {};
	$scope.menu.coffee = {
		"items": [
			{
				"drink": "Coffee",
				"description": "Locally-roasted organic beans",
				"priceSmall": "1.95",
				"priceMed": "2.25",
				"priceLarge": "2.40",
			},
			{
				"drink": "Cafe Au Lait",
				"priceSmall": "1.95",
				"priceMed": "2.25",
				"priceLarge": "2.40",
			}
		]
	}
	console.log($scope)
});