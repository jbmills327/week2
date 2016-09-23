var noun = prompt("Enter a noun please ");

alert("The word you entered was: " + noun + ". There are " + noun.length +
    " letters in that word.  The word in all lowercase looks like this: " + noun.toLowerCase() +
    " and in uppercase looks like this: " + noun.toUpperCase() + ". The 3rd letter is this word is: " +
    noun.charAt(2) + ". The subtring of this word, from the 2nd to the 4th character is: " + noun.substring(1, 4));
