/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZTEST_INPUTF4/ZTEST_INPUTF4/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});