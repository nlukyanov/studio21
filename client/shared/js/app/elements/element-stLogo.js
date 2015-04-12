(function() {

	var stLogo = angular.module('stLogo', []);

	stLogo.directive('stLogo', function($http, settingsFactory) {
		return {
			templateUrl: '../client/shared/html/elements/element-logo.html',
			restrict: 'E',
			link: link,
			replace: true
		};
		function link(scope, element, attrs) {
			var logoLink = element.find('a'),
				logoImg = '';

			// === Getting website settings
			settingsFactory.getSettings(function(data) {
				scope.settings = data;
			});

			// === Setting up logo
			scope.$watch('settings', function() {
				if ( scope.settings ) {
					logoImg = scope.settings.website.logo;
					scope.title = scope.settings.website.title;
					scope.url = scope.settings.website.url;
					logoLink.html(logoImg);
				}
			});
		};
	});

})();