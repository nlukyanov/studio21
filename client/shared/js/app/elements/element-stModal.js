(function() {

	var stModal = angular.module('stModal', []);

	stModal.directive('stModal', function($http, iconsFactory) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				stModal: '='
			}
		};
		function link(scope, element, attrs) {
			var modalLink = $('.' + scope.stModal);
			modalLink.on('click', function() {
				element.show();
			});
			element.on('click', function() {
				element.hide();
			});
			element.on('click', '.modal-hide', function(e) {
				e.preventDefault();
				element.hide();
			});
			element.on('click', '.modal-holder', function(e) {
				e.stopPropagation();
			});
		};
	});

})();