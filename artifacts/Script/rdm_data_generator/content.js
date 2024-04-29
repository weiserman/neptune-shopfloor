const fields = { 
    timestamp: "timestamp", 
    machine_name: "smalltext", 
    cycle_complete: "boolean",
    status: "text", 
    error_code: "text" 
};

async function generateTestData(numEntries, machines, errorCodes=["E01", "E02"]) {
    const generatedData = [];

    for (let i = 0; i < numEntries; i++) {
        const newEntry = {
            timestamp: new Date().toISOString(), // Generate ISO timestamp string
            machine_name: machines[Math.floor(Math.random() * machines.length)], 
            cycle_complete: Math.random() < 0.5, // Random boolean
            status: Math.random() < 0.1 ? "Error" : "Running", 
            error_code: Math.random() < 0.1 ? errorCodes[Math.floor(Math.random() * errorCodes.length)] : null
        };

        generatedData.push(newEntry);
    }

    return generatedData;
}

// Example Usage
const newSensorData = await generateTestData(20, ["Press 1 - Boksburg", "Press 2 - Boksburg"]);

// Neptune: Inserting the Data (assumptions about your API)
for (const entry of newSensorData) {
    await entities.rdm_sensor_data.insert(entry); 
} 
