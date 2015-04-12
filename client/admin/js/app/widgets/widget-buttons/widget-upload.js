(function() {

	var widgetBtnUpload = angular.module('widgetBtnUpload', []);

	widgetBtnUpload.directive('widgetBtnUpload', function($http, $location) {
		return {
			restrict: 'A',
			link: link,
			scope: {
				widgetBtnUpload: '='
			},
			templateUrl: '../client/admin/html/widgets/widget-buttons/widget-upload.html'
		};
		function link(scope, element, attrs) {
			scope.triggerUpload = function(e) {
				e.preventDefault();
				element.find('.widget-image-upload').trigger('click');
			}
			element.find('.widget-image-upload').on('change', function() {
				element.find('.widget-image-form').trigger('submit');
			});
			scope.uploadImage = function(e) {
				e.preventDefault();
			}
		};
	});

})();