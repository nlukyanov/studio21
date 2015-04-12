(function() {

	var widgetBtnListSettings = angular.module('widgetBtnListSettings', []);

	widgetBtnListSettings.directive('widgetBtnListSettings', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnListSettings: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-listSettings.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnListSettings ) {
				
			}
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
		};
	});

})();