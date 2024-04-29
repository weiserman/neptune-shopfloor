// Custom NodeJS module installed -> https://www.npmjs.com/package/mqtt
const mqtt = modules.mqtt;

console.log('Script started, attempting to connect to the MQTT broker...');

// Wrapping MQTT connect in a promise
function connectClient() {
    return new Promise((resolve, reject) => {
        const client = mqtt.connect('mqtt://test.mosquitto.org');

        client.on('connect', () => {
            console.log('Connected to MQTT broker.');
            resolve(client);
        });

        client.on('error', (err) => {
            console.error('Connection error:', err.message);
            reject(err);
        });
    });
}

function subscribeToTopic(client) {
    return new Promise((resolve, reject) => {
        client.subscribe('test/topic', (err, granted) => {
            if (err) {
                console.error('Subscription error:', err.message);
                reject(err);
            } else {
                console.log('Subscription successful:', granted.map(grant => `${grant.topic} at QoS ${grant.qos}`).join(', '));
                resolve(client);
            }
        });

        client.on('message', (topic, message) => {
            console.log(`Message received on ${topic}: ${message.toString()}`);
            // Here we don't resolve or reject because we want to keep listening to messages.
            // If you want to process a specific number of messages or wait for a particular one, adjust accordingly.
        });
    });
}

// Execute the script using promises
connectClient()
    .then(client => subscribeToTopic(client))
    .then(() => {
        console.log('Listening for messages....');
        // Normally we would call complete() here, but because we're continuously listening, we don't complete the script.
        // If you have a condition to end listening, call complete() after that condition is met.
    })
    .catch(err => {
        console.error('An error occurred:', err);
        fail(); // Assuming `fail()` is similar to `complete()` but for errors.
    });
