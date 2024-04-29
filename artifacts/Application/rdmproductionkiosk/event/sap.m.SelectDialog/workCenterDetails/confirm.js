// Single Select
var selectedItem = oEvent.getParameter("selectedItem");
console.log(selectedItem);
var context = selectedItem.getBindingContext();
var value = context.getProperty("workcenter");

// Update Inputfield
//InputWorkCenter.setValue(value);
objectPageHeader.setObjectTitle(value);