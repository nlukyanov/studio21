(function() {

	var widgetItem = angular.module('widgetItem', []);

	widgetItem.directive('widgetItem', function($http, $location, $timeout) {
		return {
			restrict: 'A',
			link: link,
			templateUrl: '../client/admin/html/widgets/widget-item.html',
			replace: true,
			scope: {
				widgetItem: '=',
				widgetItemType: '=',
				widgetItemData: '='
			}
		};
		function link(scope, element, attrs) {
			scope.settings = scope.widgetItem.settings;
			scope.data = scope.widgetItemData;

			if ( scope.settings.align ) {
				scope.align = scope.settings.align;
			}

			// === Font weight
			if ( scope.settings.fontWeight ) {
				scope.fontWeight = scope.settings.fontWeight;
			}

			// === Font size
			if ( scope.settings.fontSize ) {
				scope.fontSize = scope.settings.fontSize;
			}

			// === Color
			if ( scope.settings.color ) {
				scope.color = scope.settings.color;
			}

			// === Background
			if ( scope.settings.background ) {
				scope.background = scope.settings.background;
			}

			// === View Heading
			if ( scope.settings.viewHeading ) {
				scope.viewHeading = scope.settings.viewHeading;
			}

			// === View Image
			if ( scope.settings.viewImage ) {
				scope.viewImage = scope.settings.viewImage;
			}

			// === Width
			if ( scope.settings.width ) {
				scope.width = scope.settings.width;
			}

			// === Height
			if ( scope.settings.height ) {
				scope.height = scope.settings.height;
			}

			// === Visibility
			if ( scope.settings.visibility ) {
				scope.visibility = scope.settings.visibility;
			}

			// === Upload
			if ( scope.settings.upload ) {
				scope.upload = scope.settings.upload;
			}

			// === List settings
			if ( scope.settings.listSettings ) {
				scope.listSettings = scope.settings.listSettings;
			}

			// === Add list item
			if ( scope.settings.addListItem ) {
				scope.addListItem = scope.settings.addListItem;
			}

			// === Overflow
			if ( scope.settings.overflow ) {
				scope.overflow = scope.settings.overflow;
			}

			// === Banner settings
			if ( scope.settings.bannerSettings ) {
				scope.bannerSettings = scope.settings.bannerSettings;
			}

			// === Position
			if ( scope.settings.position ) {
				scope.position = scope.settings.position;
			}

			// === Banner heading
			if ( scope.settings.bannerHeading ) {
				scope.bannerHeading = scope.settings.bannerHeading;
			}

			// === Banner text
			if ( scope.settings.bannerText ) {
				scope.bannerText = scope.settings.bannerText;
			}

			// === Banner link
			if ( scope.settings.bannerLink ) {
				scope.bannerLink = scope.settings.bannerLink;
			}

			// === Link type
			if ( scope.settings.linkType ) {
				scope.linkType = scope.settings.linkType;
			}

			// === Url
			if ( scope.settings.url ) {
				scope.url = scope.settings.url;
			}

			// === Vertical position
			if ( scope.settings.positionVertical ) {
				scope.positionVertical = scope.settings.positionVertical;
			}

			// === Horisontal position
			if ( scope.settings.positionHorisontal ) {
				scope.positionHorisontal = scope.settings.positionHorisontal;
			}

			// === Horisontal position
			if ( scope.settings.featureSettings ) {
				scope.featureSettings = scope.settings.featureSettings;
			}

			// === Handling widget drop down
			scope.$on('triggerToggleDrop', function(i, e) {
				scope.toggleDrop(e);
			});
			scope.$on('triggerCloseDrop', function(i, e) {
				scope.toggleDrop(e);
			});
			scope.$on('triggerSubsetOpen', function(i, e) {
				scope.openSubset(e);
			});
			scope.$on('triggerSubsetClose', function(i, e) {
				scope.closeSubset(e);
			});
			scope.openDrop = function(e) {
				e.preventDefault();
				$(e.target).closest('.widget-item').addClass('active').siblings().removeClass('active').find('.widget-drop').hide();
				$(e.target).closest('.widget-item').find('.widget-drop').show();
				$(e.target).closest('.widget').addClass('widget-drop-open');
			}
			scope.closeDrop = function(e) {
				e.preventDefault();
				$(e.target).closest('.widget-item').removeClass('active');
				$(e.target).closest('.widget-item').find('.widget-drop').hide();
				$(e.target).closest('.widget').removeClass('widget-drop-open');
				scope.closeSubset();
			}
			scope.toggleDrop = function(e) {
				e.preventDefault();
				$(e.target).closest('.widget-item').toggleClass('active').siblings().removeClass('active').find('.widget-drop').hide();
				$(e.target).closest('.widget-item').find('.widget-drop').toggle();
				if ( $(e.target).closest('.widget-item').hasClass('active') ) {
					$(e.target).closest('.widget').addClass('widget-drop-open');
				}
				else {
					$(e.target).closest('.widget').removeClass('widget-drop-open');
				}
			}

			scope.openSubset = function(e) {
				e.preventDefault();
				$('.widget-item').removeClass('active');
				$('.widget-drop').hide();
				$('.widget-drop-open').removeClass('widget-drop-open');
				$(e.target).closest('.widget').addClass('widget-subset-open');
				$(e.target).closest('.widget-item').find('.widget-subset').addClass('subset-open');
			}
			scope.closeSubset = function(e) {
				if ( e ) {
					e.preventDefault();
					$('.widget-item').removeClass('active');
					$('.widget-drop').hide();
					$('.widget-drop-open').removeClass('widget-drop-open');
				}
				$('.widget').removeClass('widget-subset-open');
				$('.widget-subset').removeClass('subset-open');
			}

			// === Handling widget
			element.prev('.widget-trigger').on('click', function() {
				element.prev('.widget-trigger').addClass('focus').closest('section').siblings('section').find('.widget-trigger').removeClass('focus');
				$('.widget-holder').not(element.closest('.widget-holder')).find('.widget-trigger').removeClass('focus');
			});
			$('body').on('click', function(e) {
				var target = $(e.target);
				if ( !target.closest('.widget').length && !target.closest('.focus').length && !target.hasClass('focus') ) {
					element.prev('.widget-trigger').removeClass('focus');
					element.find('.widget-item.active').removeClass('active');
					element.find('.widget-drop').hide();
					element.removeClass('widget-drop-open');
					scope.closeSubset();
				}
			});
		};
	});

})();