// Ensure that the SAP UI5 core is fully loaded before initializing anything

function addData() {
Highcharts.update({
    series: [
        {
            name: "Installation",
            data: [1000, 4000, 6000, 7000, 200, 10000, 2000, 1000, 35000],
        },
        {
            name: "Manufacturing",
            data: [4000, 5000, 7000, 1000, 22000, 1100, 3200, 20000, 15000],
        },
        {
            data: [12000, 2500, 2700, 2100, 2200, 3100, 3320, 3200, 5500],
        },
    ],
})};
