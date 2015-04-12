(function() {

	var widgetBtnFontWeight = angular.module('widgetBtnFontWeight', []);

	widgetBtnFontWeight.directive('widgetBtnFontWeight', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnFontWeight: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-fontWeight.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnFontWeight ) {
				$timeout(function() {
					element.find('.fontWeight-slider')
						.slider({min: 1, max: 3, value: scope.widgetBtnFontWeight.value})
						.slider('float')
						.slider('pips', {
							labels: ['Light', 'Normal', 'Bold']
						})
						.on('slidechange', function(e, ui) {
							scope.widgetBtnFontWeight.value = ui.value;
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