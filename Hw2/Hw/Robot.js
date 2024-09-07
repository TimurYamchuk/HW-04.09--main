var Participant = require('./Participant');


function Robot(name) {
    Participant.call(this, name, 1000, 3); 
}
Robot.prototype = Object.create(Participant.prototype);

module.exports = Robot;
