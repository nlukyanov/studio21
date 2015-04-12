(function() {

	var widgetBtnOverflow = angular.module('widgetBtnOverflow', []);

	widgetBtnOverflow.directive('widgetBtnOverflow', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnOverflow: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-overflow.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnOverflow ) {
				$timeout(function() {
					element.find('.overflow-slider')
						.slider({min: 1, max: 2, value: scope.widgetBtnOverflow.value})
						.slider('float')
						.slider('pips', {
							labels: ['Dark', 'Light']
						})
						.on('slidechange', function(e, ui) {
							scope.widgetBtnOverflow.value = ui.value;
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