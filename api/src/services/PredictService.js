const amqp = require('amqplib/callback_api');
const uuid = require('uuid');
const EventEmitter = require('events');

const CONN_URL = 'amqp://server_user:server_user@localhost/service_vhost';

const REPLY_QUEUE = 'amq.rabbitmq.reply-to';

let ch = null;

amqp.connect(CONN_URL, (err,conn) => {
  conn.createChannel( (err, channel) => {
    channel.responseEmitter = new EventEmitter();
    channel.responseEmitter.setMaxListeners(0);
    channel.consume(
      REPLY_QUEUE,
      msg => {
        channel.responseEmitter.emit(
          msg.properties.correlationId,
          msg.content.toString('utf8'),
        );
      },
      { noAck: true },
    );

    ch = channel;
  })
});

const sendRPCMessage = (message, rpcQueue, callback) => {
  const correlationId = uuid.v4();

  ch.responseEmitter.once(correlationId, callback);

  ch.sendToQueue(rpcQueue, Buffer.from(message), {
    correlationId,
    contentType : 'application/json',
    replyTo: REPLY_QUEUE,
  });
}

const createTaskMessage = (taskName, taskData) => ({
  id: uuid.v4(),
  task: taskName,
  args: [taskData],
  eta: (new Date()).toISOString()
});


module.exports = {
  sendTask(taskName, taskData='Task Mock', callback){
    const message = createTaskMessage(taskName, taskData);
    const serializedMessage = JSON.stringify(message);
    sendRPCMessage(serializedMessage, 'celery', callback)
  }
}
