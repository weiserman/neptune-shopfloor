//let oDraggedControl = oEvent.getParameter('draggedControl');
let oDraggedContext = oEvent.oSource.getBindingContext('DataModel')
let oDraggedData = oDraggedContext.getObject();
addToDev(oDraggedData);