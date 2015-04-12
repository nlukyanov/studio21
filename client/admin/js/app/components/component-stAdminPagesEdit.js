(function() {

	var stAdminPagesEdit = angular.module('stAdminPagesEdit', []);

	stAdminPagesEdit.directive('stAdminPagesEdit', function($http, $location, pagesListFactory, contentTypeFactory) {
		return {
			restrict: 'A',
			link: link
		};
		function link(scope, element, attrs) {
			var newPage = {
				'id': '',
				'title': '',
				'slug': '',
				'content': [
				],
				'accepted': false
			};
			pagesListFactory.getShopPages(function(data) {
				scope.shopPages = data;
			});
			scope.model = newPage;
			scope.content = scope.model.content;
			scope.newItem = function(e) {
				e.preventDefault();
				scope.newItems = contentTypeFactory;
			}
			scope.addItem = function(e) {
				var option = $(e.target).closest('#newPage-itemForm').find('#item-type').val(),
					item = angular.copy(scope.newItems[option]);

				scope.content.push(item);
			}
		};
	});

})();