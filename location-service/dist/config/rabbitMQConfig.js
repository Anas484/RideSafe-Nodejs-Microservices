import amqp from 'amqplib';
let channel;
async function connectRabbitMQ() {
    const connection = await amqp.connect('amqp://localhost:5672');
    channel = await connection.createChannel();
    console.log('RabbitMQ connected (Location Service)');
}
function getChannel() {
    if (!channel) {
        throw new Error('RabbitMQ not initialized');
    }
    return channel;
}
export { connectRabbitMQ, getChannel, };
//# sourceMappingURL=rabbitMQConfig.js.map