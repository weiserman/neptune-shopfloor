console.log(oEvent.getParameters());

var oDraggedControl = oEvent.getParameter('draggedControl');
var oDraggedContext = oDraggedControl.getBindingContext('DataModel');
var oDraggedData = oDraggedContext.getObject();
//console.log(oDraggedData);
addToProd(oDraggedData);

//email event
triggerEventTrigger({
    name:oDraggedData.name,
    note:oDraggedData.note
})