let oDraggedControl = oEvent.getParameter('draggedControl');
let oDraggedContext = oDraggedControl.getBindingContext('DataModel');
let oDraggedData = oDraggedContext.getObject();
addToDev(oDraggedData);