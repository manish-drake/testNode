var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventHandler = function(){
    console.log('connection successful');

    eventEmitter.emit('data_received');
}

eventEmitter.on('eventName', eventHandler);
eventEmitter.on('data_received', function(){
    console.log('Data received');
});
eventEmitter.emit('eventName');
console.log('End');
