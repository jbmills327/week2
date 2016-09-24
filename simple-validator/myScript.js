var phoneNumber = prompt("Pleae enter your phone number in the following format: 555-555-5555.  I" +
    " won't call you, promise");

if (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-") {
    alert("You have entered a valid phone number.  Thank you.");
} else {
    alert("This is not a valid phone number");
};

var dob = prompt("Please enter your DOB in the following format: mm/dd/yyyy");

if (dob.charAt(2) === "/" && dob.charAt(5) === "/") {
    alert("That is a valid date of birth");
} else {
    alert("That is not a valid DOB, please try again");
}

var postalCode = prompt("What is your 5 digit zip code?");

if (postalCode.length === 5 || postalCode.charAt(5) === "-") {
    alert("Thank you.  That is a valid zip code");
} else {
    alert("That is not a valid zip code");
};

var state = prompt("What is your states two letter abbreviation?");

if (state.length === 2) {
    alert("That is a valid state abbreviation");
} else {
    alert("Please enter a two letter state abbreviation");
};
