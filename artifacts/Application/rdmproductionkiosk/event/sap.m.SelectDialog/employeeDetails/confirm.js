// Single Select
var selectedItem = oEvent.getParameter("selectedItem");
console.log(selectedItem);
var context = selectedItem.getBindingContext();
var value = context.getProperty("Name");

// Update Inputfield
InputEmployee.setValue(value);