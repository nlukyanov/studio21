(function() {

	var widgetBtnBannerHeading = angular.module('widgetBtnBannerHeading', []);

	widgetBtnBannerHeading.directive('widgetBtnBannerHeading', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnBannerHeading: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-bannerHeading.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnBannerHeading ) {
			}
			scope.changeAlign = function(e, align) {
				e.preventDefault();
				scope.widgetBtnBannerHeading.align.value = align;
			}
			scope.triggerSubsetOpen = function(e) {
				scope.$emit('triggerSubsetOpen', e);
			};
			scope.triggerSubsetClose = function(e) {
				scope.$emit('triggerSubsetClose', e);
			};
		};
	});

})();