(function() {

	var widgetBtnFontSize = angular.module('widgetBtnFontSize', []);

	widgetBtnFontSize.directive('widgetBtnFontSize', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnFontSize: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-fontSize.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnFontSize ) {
				$timeout(function() {
					element.find('.fontSize-slider')
						.slider({min: 1, max: 6, value: scope.widgetBtnFontSize.value})
						.slider('float')
						.slider('pips')
						.on('slidechange', function(e, ui) {
							scope.widgetBtnFontSize.value = ui.value;
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