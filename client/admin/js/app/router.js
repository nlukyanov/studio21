(function() {
  
	var router = angular.module('router', ['ngRoute']);

	router.config(function($routeProvider, $locationProvider) {
		$routeProvider
				.when('/login', {
					templateUrl: config.prefix + 'html/templates/login.html',
				})
				.when('/dashboard', {
					templateUrl: config.prefix + 'html/templates/dashboard.html',
				})
				.when('/pages', {
					templateUrl: config.prefix + 'html/templates/pages.html',
				})
				.when('/pages/new', {
					templateUrl: config.prefix + 'html/templates/pages/edit.html'
				})
				.when('/products', {
					templateUrl: config.prefix + 'html/templates/products.html',
				})
				.when('/filters', {
					templateUrl: config.prefix + 'html/templates/filters.html',
				})
				.when('/moderation', {
					templateUrl: config.prefix + 'html/templates/moderation.html',
				})
				.when('/orders', {
					templateUrl: config.prefix + 'html/templates/orders.html',
				})
				.when('/messages', {
					templateUrl: config.prefix + 'html/templates/messages.html',
				})
				.when('/profile', {
					templateUrl: config.prefix + 'html/templates/profile.html',
				})
				.when('/settings', {
					templateUrl: config.prefix + 'html/templates/settings.html',
				})
				.otherwise({redirectTo: '/404'});
		//$locationProvider.html5Mode(true);
	});

})();
