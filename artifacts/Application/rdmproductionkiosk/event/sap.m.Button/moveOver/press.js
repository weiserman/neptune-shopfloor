console.log(oEvent.oSource.getBindingContext('DataModel'));

// var oDraggedControl = oEvent.getParameter('draggedControl');
var oDraggedContext = oEvent.oSource.getBindingContext('DataModel')
var oDraggedData = oDraggedContext.getObject();
console.log(oDraggedData);
addToProd(oDraggedData);