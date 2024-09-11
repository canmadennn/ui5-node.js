sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("myapp.controller.App", {

        onInit: function () {
            // Create a new JSON model
            var oModel = new JSONModel();
            this.getView().setModel(oModel);

            // Fetch data from the server
            this._fetchData();
        },

        _fetchData: function () {
            var oModel = this.getView().getModel();

            // Make an AJAX request to the API
            jQuery.ajax({
                url: "/api/hello",
                method: "GET",
                success: function (data) {
                    // Update the model with data from the server
                    oModel.setData(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error("Error fetching data from server:", textStatus, errorThrown);
                }
            });
        }

    });
});
