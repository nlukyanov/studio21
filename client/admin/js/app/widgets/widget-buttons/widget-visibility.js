(function() {

	var widgetBtnVisibility = angular.module('widgetBtnVisibility', []);

	widgetBtnVisibility.directive('widgetBtnVisibility', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnVisibility: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-visibility.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnVisibility ) {
			}
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
		};
	});

})();