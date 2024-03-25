import { kafkaInit } from "./kafka/kafka.config";

kafkaInit().catch((err) => {
    console.error('Error in Kafka initialization: ', err);
    process.exit(1);
});