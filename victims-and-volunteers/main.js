// var howMany = Number(prompt("How many victims do you have?"));
// var victims = [];



function needSomeone() {
    var victims = [];
    var yep = confirm("Do you have someone who needs help?");
    // for (var i = 0; i < howMany; i++) {
    while (yep) {
        var help = {};
        help.name = (prompt("What is the name of this victim?"));
        help.street = (prompt("What is the street?"));
        help.phoneNumber = (prompt("What is the phone number?"));
        victims.push(help);
        yep = confirm("Do you have another victim to add?")
    }
    return victims;
}


console.log(needSomeone());




// var numberOfVolunteers = +(prompt("How many volunteers are available?"));

function hereToHelp() {
    var helpers = [];
    var yep = confirm("Do you have someone who can help?");
    while (yep) {
        // for (var i = 0; i < numberOfVolunteers; i++) {
        var help = {};
        help.name = (prompt("What is the name of this volunteers?"));
        help.street = (prompt("What street does this volunteer live on?"));
        help.phoneNumber = (prompt("What is the volunteers phone number?"));
        helpers.push(help);
        yep = confirm("Do you have more volunteers to add?")
    }
    return helpers;
}

console.log(hereToHelp());;
