(function() {

	var widgetBtnPosition = angular.module('widgetBtnPosition', []);

	widgetBtnPosition.directive('widgetBtnPosition', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnPosition: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-position.html'
		};
		function link(scope, element, attrs) {
			scope.positions = {
				'top left': '1',
				'top center': '2',
				'top right': '3',
				'middle left': '4',
				'middle center': '5',
				'middle right': '6',
				'bottom left': '7',
				'bottom center': '8',
				'bottom right': '9'
			}
			if ( scope.widgetBtnPosition ) {
				scope.changePosition = function(e, i) {
					e.preventDefault();
					scope.widgetBtnPosition.value = i;
				}
			}
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
		};
	});

})();