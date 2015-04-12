(function() {

	var widgetBtnFeatureSettings = angular.module('widgetBtnFeatureSettings', []);

	widgetBtnFeatureSettings.directive('widgetBtnFeatureSettings', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnFeatureSettings: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-featureSettings.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnFeatureSettings ) {
				
			}
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
		};
	});

})();