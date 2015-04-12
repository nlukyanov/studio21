(function() {

	var widgetBtnAddListItem = angular.module('widgetBtnAddListItem', []);

	widgetBtnAddListItem.directive('widgetBtnAddListItem', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnAddListItem: '=',
				widgetBtnAddListItemData: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-addListItem.html'
		};
		function link(scope, element, attrs) {
			if ( scope.widgetBtnAddListItem ) {
				scope.addItem = function(e) {
					e.preventDefault();
					scope.widgetBtnAddListItemData.content.push({'html': ''});
				}
			}
		};
	});

})();