(function() {

	var stAdminPages = angular.module('stAdminPages', []);

	stAdminPages.directive('stAdminPages', function($http, $location, pagesListFactory) {
		return {
			restrict: 'A',
			link: link,
			templateUrl: '../client/admin/html/components/component-adminPages.html'
		};
		function link(scope, element, attrs) {
			pagesListFactory.getShopPages(function(data) {
				scope.shopPages = data;
			});
			scope.addPage = function(e) {
				e.preventDefault();
				$location.path('/pages/new');
			}
		};
	});

})();