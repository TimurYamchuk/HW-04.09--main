var Participant = require('./Participant');

function Human2(name) {
    Participant.call(this, name, 300, 3); 
}
Cat.prototype = Object.create(Participant.prototype);

module.exports = Cat;
