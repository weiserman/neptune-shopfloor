var employees = xhr.responseJSON;
console.log(employees);

modelemployeeDetails.setData(employees);

// Set a default value
var firstemp = employees[0]
workerIdentifier.setTitle(firstemp.Name + ' ' + firstemp.Surname);
//InputEmployee.setValue(firstemp.Name + ' ' + firstemp.Surname);