var howMany = Number(prompt("How many victims do you have?"));
var victims = [];

// while(moreToAdd){
for (var i = 0; i < howMany; i++) {
    var help = {};
    help.name = (prompt("What is the name of this victim"));
    help.street = (prompt("What is the street"));
    help.phoneNumber = (prompt("What is the phone number"));
    victims.push(help);
}


var numberOfVolunteers = +(prompt("How many rescuers are available?"));
var volunteers = [];

for (var i = 0; i < numberOfVolunteers; i++) {
    var help = {};
    help.name = (prompt("What is the name of this volunteer?"));
    help.street = (prompt("What street does this volunteer live on?"));
    help.phoneNumber = (prompt("What is the phone number for this volunteer"));
    volunteers.push(help);
}



console.log(victims);
console.log(volunteers);
