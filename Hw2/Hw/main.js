var Human = require('./Human');
var Human2 = require('./Human2');
var Robot = require('./Robot');
var RunningTrack = require('./RunningTrack');
var Wall = require('./Wall');

// Участники
var participants = [
    new Human('учачтник1'),
    new Human2('учачтник2'),
    new Robot('учачтник3')
];

// Препятствия
var obstacles = [
    new RunningTrack(400),
    new Wall(2),          
    new RunningTrack(800), 
    new Wall(1)            
];

// Участники проходят каждое препятствие
participants.forEach(function (participant) {
    console.log(`\nУчастник: ${participant.name} `);

    var passedAllObstacles = true;

    for (var i = 0; i < obstacles.length; i++) {
        var obstacle = obstacles[i];
        var result = obstacle.overcome(participant);

        if (!result) {
            passedAllObstacles = false;
            console.log(`${participant.name} выбыл.`);
            break;
        }
    }

    if (passedAllObstacles) {
        console.log(`${participant.name} выиграл!`);
    }
});
