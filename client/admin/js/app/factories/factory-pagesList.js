(function() {

	var stPagesListFactory = angular.module('stPagesListFactory', []);

	stPagesListFactory.factory('pagesListFactory', function($http) {
		return {
			getShopPages: function(data){
				$http.get('../client/admin/json/data-shopPages.json').success(data);
			}
		};
	});

})();