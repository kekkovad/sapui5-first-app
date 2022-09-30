sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("btp.academy.firstfioriapp.controller.Main", {
      onInit: function () {},
      onPress: function (oEvent) {
        const sId = oEvent.getParameter("id");
        MessageToast.show("Button pressed: " + sId);
      },
    });
  }
);
