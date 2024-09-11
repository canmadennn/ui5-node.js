//@ui5-bundle myapp/Component-preload.js
sap.ui.predefine("myapp/Component", ["sap/ui/core/UIComponent","sap/ui/core/ComponentContainer"],function(n,e){"use strict";return n.extend("myapp.Component",{metadata:{manifest:"json"}})});
sap.ui.predefine("myapp/controller/App.controller", ["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("myapp.controller.App",{onInit:function(){var e=new t;this.getView().setModel(e);this._fetchData()},_fetchData:function(){var e=this.getView().getModel();jQuery.ajax({url:"/api/hello",method:"GET",success:function(t){e.setData(t)},error:function(e,t,o){console.error("Error fetching data from server:",t,o)}})}})});
sap.ui.require.preload({
	"myapp/manifest.json":'{"sap.ui5":{"rootView":{"viewName":"myapp.view.App","type":"XML","id":"app"},"dependencies":{"minUI5Version":"1.84.0","libs":{"sap.ui.core":{}}}},"sap.app":{"id":"myapp","type":"application","applicationVersion":{"version":"1.0.0"},"title":"My UI5 Application","description":"A sample UI5 application"}}',
	"myapp/view/App.view.xml":'<mvc:View\r\n        xmlns:mvc="sap.ui.core.mvc"\r\n        xmlns="sap.m"\r\n        controllerName="myapp.controller.App"><App><Page title="My UI5 ssApp"><content><Text text="Hello, UIs5!"/></content></Page></App></mvc:View>\r\n'
});
//# sourceMappingURL=Component-preload.js.map
