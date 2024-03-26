const {Kafka} =require('kafkajs');

const kafka = new Kafka({
    clientId: 'rms-kafka',
    brokers: ['kafka:9092']
})

export async function kafkaInit() {
    const admin = kafka.admin();
    console.log('Connecting to Kafka...');
    await admin.connect();
    console.log('Connected to Kafka');
    console.log('Creating topics...')
    await admin.createTopics({
        topics:[{
            topic:'restaurant-register',
            numPartitions: 2
        }]
    })
    console.log('Topics created');
    console.log('Disconnecting...')
    await admin.disconnect();
}






