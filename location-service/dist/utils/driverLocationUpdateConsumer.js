import amqp from "amqplib";
async function startDriverLocationUpdateConsumer() {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const queue = "driver_location_update";
    await channel.assertQueue(queue, { durable: true });
    channel.consume(queue, (msg) => {
        if (!msg)
            return;
        const data = JSON.parse(msg.content.toString());
        console.log("Received:", data);
        channel.ack(msg);
    });
    console.log("RabbitMQ Consumer running...");
}
export default startDriverLocationUpdateConsumer;
//# sourceMappingURL=driverLocationUpdateConsumer.js.map