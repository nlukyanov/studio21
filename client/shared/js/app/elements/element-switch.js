(function() {

	var elementSwitch = angular.module('elementSwitch', []);

	elementSwitch.directive('elementSwitch', function($http, $location) {
		return {
			restrict: 'A',
			link: link
		};
		function link(scope, element, attrs) {
			element.next('label').on('click', function() {
				element.trigger('click');
			});
		};
	});

})();