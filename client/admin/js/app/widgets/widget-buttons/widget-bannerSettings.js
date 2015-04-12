(function() {

	var widgetBtnBannerSettings = angular.module('widgetBtnBannerSettings', []);

	widgetBtnBannerSettings.directive('widgetBtnBannerSettings', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnBannerSettings: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-bannerSettings.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnBannerSettings ) {
				
			}
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
		};
	});

})();