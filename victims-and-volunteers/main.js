var howMany = Number(prompt("How many victims do you have?"));
// var victims = [];

function needSomeone() {
    var victims = [];
    for (var i = 0; i < howMany; i++) {
        var help = {};
        help.name = (prompt("What is the name of this victim?"));
        help.street = (prompt("What is the street?"));
        help.phoneNumber = (prompt("What is the phone number?"));
        victims.push(help);
    }
    return victims;
}

console.log(needSomeone());



// needSomeone();


var numberOfVolunteers = +(prompt("How many volunteers are available?"));
// var volunteers = [];

function hereToHelp() {
    var helpers = [];
    for (var i = 0; i < numberOfVolunteers; i++) {
        var help = {};
        help.name = (prompt("What is the name of this volunteers?"));
        help.street = (prompt("What street does this volunteer live on?"));
        help.phoneNumber = (prompt("What is the volunteers phone number?"));
        helpers.push(help);
    }
    return helpers;
}

console.log(hereToHelp());
//
// for (var i = 0; i < numberOfVolunteers; i++) {
//     var help = {};
//     help.name = (prompt("What is the name of this volunteer?"));
//     help.street = (prompt("What street does this volunteer live on?"));
//     help.phoneNumber = (prompt("What is the phone number for this volunteer"));
//     volunteers.push(help);
// }



// console.log(victims);
// console.log(volunteers);
