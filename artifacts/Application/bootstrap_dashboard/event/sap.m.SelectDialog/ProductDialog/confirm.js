// Single Select
// Replace FIELD to your required field
const selectedItem = oEvent.getParameter("selectedItem");
const context = selectedItem.getBindingContext();
// const value = context.getProperty("FIELD");

console.log(selectedItem);

targetValue.setText(`${selectedItem.getProperty("value")}`)

//ProductionControlCard.setTitle(`Production Control — ${selectedItem.getProperty("title")}`)
// Multi Select
// const selectedItems = oEvent.getParameter("selectedItems");

ProductButton.setContextColor("Primary");
ProductButton.setText(selectedItem.getProperty("label"));

let details = ModelArray.getModel().oData[0]

CastNumber.setText(`${details.heat_code}/${details.shell_number} ${details.cast_code}`)

if (OperationButtonBootstrap.getContextColor() === "Primary" && ProductButton.getContextColor() === "Primary"){
    StartBtnBootstrap.setEnabled(true);
}

