(function() {

	var widgetBtnPositionHorisontal = angular.module('widgetBtnPositionHorisontal', []);

	widgetBtnPositionHorisontal.directive('widgetBtnPositionHorisontal', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnPositionHorisontal: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-positionHorisontal.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnPositionHorisontal ) {
				$timeout(function() {
					element.find('.positionHorisontal-slider')
						.slider({min: 1, max: 2, value: scope.widgetBtnPositionHorisontal.value})
						.slider('float')
						.slider('pips', {
							labels: ['Слева', 'Справа']
						})
						.on('slidechange', function(e, ui) {
							scope.widgetBtnPositionHorisontal.value = ui.value;
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