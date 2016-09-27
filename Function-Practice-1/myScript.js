function tripleFive() {
    for (var i = 0; i < 3; i++) {
        console.log("Five! ");
    };
}

tripleFive();

function lastLetter(input) {
    console.log(input.charAt(input.length - 1));
};

lastLetter("Island");

function square(number) {
    console.log(number * number);
};

square(3);

function toArray(a, b, c) {
    var newArray = [a, b, c];
    console.log(newArray);
};

function negate(num) {
    var negative = num - (num * 2);
    console.log(negative);
};

negate(57);

toArray("Ron", "Hermoine", "Harry");

function startsWithA(word) {
    var wordCaps = word.toUpperCase();
    if (wordCaps.charAt(0) === "A") {
        return true;
    } else {
        return false;
    };
};

console.log(startsWithA("apple"));

function excite(moreWord) {
    console.log(moreWord + "!!!");
};

excite("Yes");

function sun(anotherWord) {
    var sunCase = anotherWord.toUpperCase();
    var lookingForSun = sunCase.indexOf("SUN");
    if (lookingForSun === -1) {
        return false;
    } else {
        return true;
    };
};

console.log(sun("asunder"));

function tiny(moreNumbers) {
    if (moreNumbers > 0 && moreNumbers < 1) {
        return true;
    } else {
        return false;
    };
};

console.log(tiny(-6));

function getSeconds(timeForm) {
    var seperateTime = timeForm.split(":");
    var newSeconds = Number(seperateTime[0]) * 60 + Number(seperateTime[1]);
    return newSeconds;
};

console.log(getSeconds("4:35"));
