(function() {

	var stLoginForm = angular.module('stLoginForm', []);

	stLoginForm.directive('stLoginForm', function($http, $location) {
		return {
			templateUrl: '../client/admin/html/components/component-loginForm.html',
			restrict: 'E',
			link: link,
			replace: true
		};
		function link(scope, element, attrs) {
			scope.submitLoginForm = function() {
				var userExists = true;
				if ( userExists ) {
					$location.path('/dashboard');
				}
			}
		};
	});

})();