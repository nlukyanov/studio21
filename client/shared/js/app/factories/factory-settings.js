(function() {

	var stSettingsFactory = angular.module('stSettingsFactory', []);

	stSettingsFactory.factory('settingsFactory', function($http) {
		return {
			getSettings: function(data){
				$http.get('../client/shared/json/data-settings.json').success(data);
			}
		};
	});

})();