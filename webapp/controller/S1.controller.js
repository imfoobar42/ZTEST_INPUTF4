sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ZTEST_INPUTF4.ZTEST_INPUTF4.controller.S1", {
			onInit: function () {
				var oModel = new JSONModel("model/Employees.json");
				this.getView().setModel(oModel, "oEmpModel");
			},
		// 		_getDialog: function () {

		// },

		handleValueHelp: function (oEvt) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("ZTEST_INPUTF4.ZTEST_INPUTF4.fragment.test", this);
				this.getView().addDependent(this._oDialog);
			//	var inputValue = oEvt.getSource().getValue();
				this.oInputId = oEvt.getSource().getId();
				//	this._oDialog().open();
			} //var oInput
			 this._oDialog.open();
		},
		onListPress: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedItem");
			
				if(oSelectedItem){
				var oInput = sap.ui.getCore().byId(this.oInputId);
				oInput.setValue(oSelectedItem.getTitle());
				}
		},

		onClose: function () {
			this._getDialog().close();
		}

	});
});