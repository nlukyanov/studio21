(function() {

	var stIcon = angular.module('stIcon', []);

	stIcon.directive('stIcon', function($http, iconsFactory) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				stIcon: '='
			}
		};
		function link(scope, element, attrs) {
			scope.$watch('stIcon', function() {
				element.html(iconsFactory[scope.stIcon]);
			});
		};
	});

})();