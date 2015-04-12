(function() {

	var widgetBtnHeight = angular.module('widgetBtnHeight', []);

	widgetBtnHeight.directive('widgetBtnHeight', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnHeight: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-height.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnHeight ) {
				$timeout(function() {
					element.find('.height-slider')
						.slider({min: 1, max: 5, value: scope.widgetBtnHeight.value})
						.slider('float')
						.slider('pips')
						.on('slidechange', function(e, ui) {
							scope.widgetBtnHeight.value = ui.value;
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