(function() {
  
	var stAdminItems = {};

	stAdminItems.main = angular.module('stAdminItems.main', ['ngRoute', 'router']);

	stAdminItems.factories = angular.module('stAdminItems.factories', ['stSettingsFactory', 'stIconsFactory', 'stAdminNavFactory', 'stPagesListFactory', 'stContentTypeFactory']);

	stAdminItems.widgets = angular.module('stAdminItems.widgets', ['widgetItem', 'widgetBtnAlign', 'widgetBtnFontWeight', 'widgetBtnFontSize', 'widgetBtnColor', 'widgetBtnViewHeading', 'widgetBtnWidth', 'widgetBtnHeight', 'widgetBtnViewImage', 'widgetBtnVisibility', 'widgetBtnUpload', 'widgetBtnListSettings', 'widgetBtnAddListItem', 'widgetBtnOverflow', 'widgetBtnBannerSettings', 'widgetBtnPosition', 'widgetBtnBannerHeading', 'widgetBtnBannerText', 'widgetBtnBannerLink', 'widgetBtnLinkType', 'widgetBtnUrl', 'widgetBtnPositionVertical', 'widgetBtnPositionHorisontal', 'widgetBtnFeatureSettings']);

	stAdminItems.components = angular.module('stAdminItems.components', ['stLoginForm', 'stAdminNav', 'stAdminPages', 'stAdminPagesEdit']);

	stAdminItems.elements = angular.module('stAdminItems.elements', ['stLogo', 'stIcon', 'stModal', 'elementSwitch', 'elementContenteditable']);

	var stAdmin = angular.module('stAdmin', ['stAdminItems.main', 'stAdminItems.factories', 'stAdminItems.widgets', 'stAdminItems.components', 'stAdminItems.elements']);

})();