(function() {

	var widgetBtnBannerLink = angular.module('widgetBtnBannerLink', []);

	widgetBtnBannerLink.directive('widgetBtnBannerLink', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnBannerLink: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-bannerLink.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnBannerLink ) {
			}
			scope.changeAlign = function(e, align) {
				e.preventDefault();
				scope.widgetBtnBannerLink.align.value = align;
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