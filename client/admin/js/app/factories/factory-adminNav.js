(function() {

	var stAdminNavFactory = angular.module('stAdminNavFactory', []);

	stAdminNavFactory.factory('adminNavFactory', function($http) {
		return {
			getAdminNav: function(data){
				$http.get('../client/admin/json/data-adminNav.json').success(data);
			}
		};
	});

})();