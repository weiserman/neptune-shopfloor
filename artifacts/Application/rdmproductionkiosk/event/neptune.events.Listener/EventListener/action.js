// capture the data sent from the script by saving into a variable
const responseData = data;

console.log("Response from script");

setTimeout(function () {

    sap.m.MessageToast.show(responseData);

}, 800);
