sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "../script/apiCaller"
], function (Controller, JSONModel, MessageBox,apiCaller) {
    "use strict";

    return Controller.extend("myapp.controller.App", {

        onInit: function () {
            // Controller initialization logic can go here
        },

        showMessageBox: function (data) {
            // Show message box with data from server
            MessageBox.show(data.message, {
                icon: MessageBox.Icon.ERROR,
                title: "Error",
                actions: [MessageBox.Action.OK]
            });
        },

        pressApiTest: function() {
            //this.getFetchData("", "");
            apiGETNoParam("/api/hello",this.showMessageBox.bind(this));
        },



        getFetchData: function (url, methodName) {
            var that = this;
            jQuery.ajax({
                url: url,
                method: "GET",
                success: function (data) {
                    // Dynamically call the method specified by methodName
                    if (that[methodName]) {
                        that[methodName](data);
                    } else {
                        console.error("Method " + methodName + " does not exist.");
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error("Error fetching data from server:", textStatus, errorThrown);
                }
            });
        }

    });
});
