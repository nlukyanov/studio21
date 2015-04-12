(function() {

	var widgetBtnWidth = angular.module('widgetBtnWidth', []);

	widgetBtnWidth.directive('widgetBtnWidth', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnWidth: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-width.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnWidth ) {
				$timeout(function() {
					element.find('.width-slider')
						.slider({min: 1, max: 5, value: scope.widgetBtnWidth.value})
						.slider('float')
						.slider('pips')
						.on('slidechange', function(e, ui) {
							scope.widgetBtnWidth.value = ui.value;
							scope.$apply();
						});
				});
			}
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
		};
	});

})();