(function() {

	var stAdminNav = angular.module('stAdminNav', []);

	stAdminNav.directive('stAdminNav', function($http, $location, adminNavFactory) {
		return {
			restrict: 'E',
			link: link,
			templateUrl: '../client/admin/html/components/component-adminNav.html',
			replace: true
		};
		function link(scope, element, attrs) {
			// === Getting admin panel navigation
			adminNavFactory.getAdminNav(function(data) {
				scope.nav = data;
			});
			scope.currentSlug = $location.path();
			scope.currentSlug = scope.currentSlug.replace('/', '');
		};
	});

})();