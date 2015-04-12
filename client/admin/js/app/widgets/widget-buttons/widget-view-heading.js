(function() {

	var widgetBtnViewHeading = angular.module('widgetBtnViewHeading', []);

	widgetBtnViewHeading.directive('widgetBtnViewHeading', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnViewHeading: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-view-heading.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnViewHeading ) {
				scope.$watch('widgetBtnViewHeading.value', function() {
					scope.viewIcon = 'view-' + scope.widgetBtnViewHeading.value;
				});
			}
			scope.changeHeadingView = function(e, view) {
				e.preventDefault();
				if ( scope.widgetBtnViewHeading.value == 'text' ) {
					scope.widgetBtnViewHeading.value = 'heading';
				}
				else {
					scope.widgetBtnViewHeading.value = 'text';
				}
			}
		};
	});

})();