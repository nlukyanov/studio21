(function() {

	var widgetBtnColor = angular.module('widgetBtnColor', []);

	widgetBtnColor.directive('widgetBtnColor', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnColor: '=',
				widgetBtnColorView: '=',
				widgetBtnColorBg: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-color.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnColor ) {
				$timeout(function() {
					element.find('.color-slider')
						.slider({min: 1, max: 3, value: scope.widgetBtnColor.value})
						.slider('float')
						.slider('pips', {
							labels: ['Dark', 'Light', 'Purple']
						})
						.on('slidechange', function(e, ui) {
							scope.widgetBtnColor.value = ui.value;
							scope.$apply();
						});
				});
			}
			if ( scope.widgetBtnColorBg ) {
				$timeout(function() {
					element.find('.background-slider')
						.slider({min: 1, max: 3, value: scope.widgetBtnColorBg.value})
						.slider('float')
						.slider('pips', {
							labels: ['Dark', 'Light', 'Purple']
						})
						.on('slidechange', function(e, ui) {
							scope.widgetBtnColorBg.value = ui.value;
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