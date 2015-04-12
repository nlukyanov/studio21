(function() {

	var widgetBtnBannerText = angular.module('widgetBtnBannerText', []);

	widgetBtnBannerText.directive('widgetBtnBannerText', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnBannerText: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-bannerText.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnBannerText ) {
			}
			scope.changeAlign = function(e, align) {
				e.preventDefault();
				scope.widgetBtnBannerText.align.value = align;
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