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
