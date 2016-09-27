function letterCapitalize(words) {
    var newArray = words.split(" ");
    for (i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].substring(1);
        var newWords = newArray.join(" ");
    }
    return newWords;
}
console.log(letterCapitalize('This is a sentence'));



function wordCount(moreWords) {
    var anotherArray = moreWords.split(" ");
    return anotherArray.length;
}

console.log(wordCount("How many words is this now?"));

function optimusPrime(x) {
    if (x === 1) {
        return "I pity the fool that thinks this is a prime number!";
    } else if (x === 2) {
        return "This baby is prime, prime, prime!";
    } else {
        for (i = 2; i < x; i++) {
            if (x % i === 0) {
                return "I pity the fool that thinks this is a prime number!";
            }
        }
    }
    return "This baby is prime, prime, prime!";
}

console.log(optimusPrime(14));
