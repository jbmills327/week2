function move(speed) {
    //typeOf is an operator that will return the type of the variable or value
    console.log(typeof speed);
    if (typeof speed === 'string') {
        console.log("We moved at a " + speed + " pace.");
    } else {
        console.log("We couldn't move");
    }
}

move('fast');
move(5);

function doThing(porkyman, digiman) {
    //es6 template literals syntax
    console.log(`The ${porkyman} fights the ${digiman}`);
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        console.log(typeof arguments[i] + " " + arguments[i]);
        //arguments can allow you to get arguments without knowing how many you have
    }
}

doThing("Pickachewed", "Augerman");
console.log(1, 2, 3, 4, 5, 6);

//scoping
//lexical scoping - variables declared inside of a scope are inaccessible outside
//of that scope

function myFunc() {
    var potato = 'spudtactular';
    console.log(potato);
    return potato;
}

console.log(myFunc());

//Dynamic Scoping
//everytime function is called or incovked it creates a scope.
//only exists when function is running.

//Garbage collection - unused variables are destroyed to free up memory.
//If a value or object has no reference it will be garbage collected.

var Pickachewed = {
    name: 'Pickashwed',
    move: 'Thunderstuff'
};

Pickachewed = null;

//The object that the variable Pickachewed referenced USED to be assigned to is garbage
//collected

var charmangler = {
    name: 'Charmangler',
    trainer: {
        name: 'Ash',
        age: 10
    }
}

var ash = charmangler.trainer;
charmangler = null; // The outside object would be garbag collected.  Trainer still exists

//Callback functions
