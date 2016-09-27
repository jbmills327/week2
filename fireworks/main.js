// var el = document.getElementById("launch");

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("launch").addEventListener("click", function() {
//         var newDiv = document.createElement("div");
//         newDiv.style.backgroundColor = "black";
//         newDiv.style.color = "white";
//         var newContent = document.createTextNode("This is a test");
//         newDiv.appendChild(newContent);
//
//         var currentDiv = document.getElementById("canvas");
//         document.body.insertBefore(newDiv, currentDiv);
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("launch").addEventListener("click", createRocket);
});


function rocketLaunch() {

    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "black";
    newDiv.style.color = "white";
    var newContent = document.createTextNode("This is a test");
    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById("canvas");
    document.body.insertBefore(newDiv, currentDiv);
};

function createRocket() {
    var rocket = document.createElement("div");
    rocket.style.left = "50vw";
    rocket.style.bottom = "0vh";
    rocket.style.width = "10px";
    rocket.style.height = "15px";
    rocket.style.backgroundColor = "black";
    var newContent = document.createTextNode("B");
    rocket.appendChild(newContent);
}
