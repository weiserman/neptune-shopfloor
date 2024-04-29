
var workcenters = xhr.responseJSON;
console.log(workcenters);

modelworkCenterDetails.setData(workcenters);


var first = workcenters[0]
objectPageHeader.setObjectTitle(first.workcenter + " / ");
//workCenterInfoHeader.setTitle(first.workcenter);
//InputWorkCenter.setValue(first.workcenter);
