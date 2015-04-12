(function() {

	var widgetBtnPositionVertical = angular.module('widgetBtnPositionVertical', []);

	widgetBtnPositionVertical.directive('widgetBtnPositionVertical', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnPositionVertical: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-positionVertical.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnPositionVertical ) {
				$timeout(function() {
					element.find('.positionVertical-slider')
						.slider({
							min: 1,
							max: 3,
							value: scope.widgetBtnPositionVertical.value,
							orientation: "vertical"
						})
						.slider('float')
						.slider('pips', {
							labels: ['Выровнять по низу', 'Выровнять по центру', 'Выровнять по верху']
						})
						.on('slidechange', function(e, ui) {
							scope.widgetBtnPositionVertical.value = ui.value;
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