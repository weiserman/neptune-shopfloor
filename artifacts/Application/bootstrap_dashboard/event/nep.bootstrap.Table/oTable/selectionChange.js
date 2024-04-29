// In selection change event


console.log(this.getSelectedKey());

var rec = ModelData.FindFirst(modeloTable, "field2", this.getSelectedKey())
console.log(rec);
