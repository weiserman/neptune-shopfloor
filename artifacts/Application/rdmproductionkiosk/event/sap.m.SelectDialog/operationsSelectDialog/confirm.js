// Single Select
var selectedItem = oEvent.getParameter("selectedItem");
console.log(selectedItem);
var context = selectedItem.getBindingContext();
var value = context.getProperty("operation");

// Update Inputfield
//InputWorkCenter.setValue(value);

var workcenter = objectPageHeader.getObjectTitle().split('/')[0];
objectPageHeader.setObjectTitle(workcenter + "/ " + value);


OperationButton.setVisible(true);
OperationButton.setText("Change Operation");
OperationButton.setType("Transparent");

SetOperationsBtn.setType("Success");
SetOperationsBtn.setIcon("sap-icon://fa-solid/check-circle")
SetOperationsBtn.setEnabled(false);
ScanCastBtn.setEnabled(true);


//SplitContainer.setShowSecondaryContent(true);

//SelectOperationPrompt.setVisible(false);

//List.setMode("SingleSelectMaster");
// ProductionOrdersLI.removeStyleClass("ProdLI");
// ListItemHeader.removeStyleClass("Unselectable");