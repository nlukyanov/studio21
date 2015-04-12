(function() {

	var widgetBtnViewImage = angular.module('widgetBtnViewImage', []);

	widgetBtnViewImage.directive('widgetBtnViewImage', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnViewImage: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-view-image.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnViewImage ) {
				scope.$watch('widgetBtnViewImage.value', function() {
					scope.viewIcon = 'view-' + scope.widgetBtnViewImage.value;
				});
			}
			scope.changeView = function(e, view) {
				e.preventDefault();
				scope.widgetBtnViewImage.value = view;
			}
			scope.triggerToggleDrop = function(e) {
				scope.$emit('triggerToggleDrop', e);
			};
		};
	});

})();