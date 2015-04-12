(function() {

	var widgetBtnAlign = angular.module('widgetBtnAlign', []);

	widgetBtnAlign.directive('widgetBtnAlign', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnAlign: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-align.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnAlign ) {
				scope.$watch('widgetBtnAlign.value', function() {
					scope.alignIcon = 'align-' + scope.widgetBtnAlign.value;
				});
			}
			scope.changeAlign = function(e, align) {
				e.preventDefault();
				scope.widgetBtnAlign.value = align;
			};
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
		};
	});

})();