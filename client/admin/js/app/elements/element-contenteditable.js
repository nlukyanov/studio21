(function() {

	var elementContenteditable = angular.module('elementContenteditable', []);

	elementContenteditable.directive('contenteditable', function($http, $location, $timeout) {
		return {
			restrict: 'C',
			link: link
		};
		function link(scope, element, attrs) {
			if ( element[0].tagName === 'TEXTAREA' ) {
				scope.changeTextareaHeight = function() {
					var lineHeight = element.css('line-height');
					element.height(lineHeight);
					element.height(element[0].scrollHeight);
					console.log('Need to recount contenteditable width!!!');
				}
				$timeout(function() {
					scope.changeTextareaHeight();
				});
				element.on('keyup', function() {
					scope.changeTextareaHeight();
				});
				$(window).on('resize', function() {
					scope.changeTextareaHeight();
				});
				element.closest('.widget-trigger').next('.widget').on('mouseup', function() {
					$timeout(function() {
						scope.changeTextareaHeight();
					});
				});
			}
		};
	});

})();