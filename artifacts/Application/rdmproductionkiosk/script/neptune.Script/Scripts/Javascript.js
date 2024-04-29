jQuery.sap.require("sap.ui.core.format.DateFormat"); // this is used to format the dates in the objectListItems

// Deletes Dev items when dropped in the trashbin
const deleteItem = (id) => {
  const data = modelDataModel.getData();
  const { devItems } = data;
  modelDataModel.setData({ ...data, devItems: devItems.filter((obj) => obj.id !== id) });
  diaMessage.open();
};

// Moves Prod items when dropped in the Dev panel
const addToDev = (item) => {
  const data = modelDataModel.getData();
  const { devItems, prodItems } = data;
  const newItem = { ...item, status: "development", icon: "sap-icon://in-progress" };
  modelDataModel.setData({ ...data, devItems: [...devItems, newItem], prodItems: prodItems.filter((obj) => obj.id !== item.id) });
};

// Moves Dev items when dropped in the Prod panel
const addToProd = (item) => {
  const data = modelDataModel.getData();
  const { devItems, prodItems } = data;
  const newItem = { ...item, status: "production", icon: "sap-icon://complete" };
  modelDataModel.setData({ ...data, devItems: devItems.filter(obj => obj.id !== item.id), prodItems: [...prodItems, newItem] });
};

