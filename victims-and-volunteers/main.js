var howMany = Number(prompt("How many victims do you have?"));
var victims = [];
var help = {};

for (var i = 0; i < howMany; i++) {
    help.name = (prompt("What is the name of this victim"));
    help.street = (prompt("What is the street"));
    help.phoneNumber = (prompt("What is the phone number"));
    victims.push(help);
}

console.log(victims);

// function victims() {
//     for (i = 0; i < arguments.length; i++) {
//         victim.name = prompt("What is this victims name?"),
//             victim.street = prompt("What is this victims street"),
//             victim.phoneNumber = prompt("What is this victims phone number")
//     }
// }
//
// victims("Tom", "Ed", "Rick");
