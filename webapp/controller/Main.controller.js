sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/m/MessageBox"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("btp.academy.firstfioriapp.controller.Main", {
      onInit: function () {},
      onPress: function (oEvent) {
        const sId = oEvent.getParameter("id");
        const bCondition = sId.includes("Button1");
        if (bCondition) {
          MessageToast.show("Button 1 pressed");
        } else MessageBox.alert("Button 2 pressed");
      },
      onPressButton3: function () {
        const oNameInput = this.getView().byId("nameInput");
        const sName = oNameInput.getValue();
        MessageToast.show("Hello " + sName);
      },
      onPressSetNameButton: function () {
        const oNameInput = this.getView().byId("nameInput");
        const sName = oNameInput.getValue();
        const oNameText= this.getView().byId("nameText");
        oNameText.setText(sName);

      },
    });
  }
);
