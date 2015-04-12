(function() {

	var widgetBtnLinkType = angular.module('widgetBtnLinkType', []);

	widgetBtnLinkType.directive('widgetBtnLinkType', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnLinkType: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-linkType.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnLinkType ) {
				scope.changeLinkType = function(e) {
					e.preventDefault();
					scope.widgetBtnLinkType.value = !scope.widgetBtnLinkType.value;
				}
			}
		};
	});

})();