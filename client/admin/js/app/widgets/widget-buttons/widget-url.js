(function() {

	var widgetBtnUrl = angular.module('widgetBtnUrl', []);

	widgetBtnUrl.directive('widgetBtnUrl', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnUrl: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-url.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnUrl ) {

			}
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
			scope.triggerCloseDrop = function(e) {
				scope.$emit('triggerCloseDrop', e);
			};
		};
	});

})();