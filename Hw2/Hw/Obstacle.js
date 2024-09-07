var EventEmitter = require('events');


function Obstacle() {
    EventEmitter.call(this); 
}
Obstacle.prototype = Object.create(EventEmitter.prototype);

module.exports = Obstacle;
