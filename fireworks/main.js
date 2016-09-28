function rocketLaunch() {
    // creates rocket and sets starting point.
    var rocket = document.createElement("div")
    rocket.className = "rocketsInFlight";
    var currentDiv = document.querySelector("#launchPad");
    document.getElementById("canvas").insertBefore(rocket, currentDiv);
    var initialVelocityY = Math.floor(Math.random() * 10) + 1;
    var initialVelocityX = Math.floor(Math.random() * 10) + 1;
    rocket.style.top = "94vh";
    rocket.style.left = (Math.floor(Math.random() * 100) + 1) + "vw";



    var start = null;


    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        rocket.style.top = Math.min(progress / 10, 200) + "vw";
        if (progress < 2000) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

setInterval(rocketLaunch, 100)
