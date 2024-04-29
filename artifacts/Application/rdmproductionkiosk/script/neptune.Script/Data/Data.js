const allData = {
    devItems : [
        {
            id: "BFF3EB47-D56F-4C3E-B2CD-F834DDCE398D",
            createdAt: "1711522409000",
            name: "M155-M500",
            note: "Customer Order: NT888",
            code: "ZKE/CXB 188",
            icon: "sap-icon://in-progress",
            status: "development",
            number: 1
        },
        {
            id: "7D830B2B-8C04-EE11-907C-000D3AB76CC2",
            createdAt: "1711521109000",
            name: "M105",
            note: "Customer Order: NT999",
            code: "ZZB/CXB 188",
            icon: "sap-icon://in-progress",
            status: "development",
            number: 2
        },
    ],
    prodItems : [

    ]
};

sap.ui.getCore().attachInit(() => {
    modelDataModel.setData(allData);
});


