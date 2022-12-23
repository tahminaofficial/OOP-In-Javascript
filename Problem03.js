function DogObject(name, age) {
    this.name = name;
    this.age = age;
}
DogObject.prototype.speak = function() {
    return "I am a dog";
}
let john = new DogObject("John", 45);

//john's __proto__ property is directed to DogObject's prototype. But remember, DogObject's prototype is an object (key and value pair), 
//hence it also has a __proto__ property which refers to the global Object protoype.

//This technique is referred to as PROTOTYPE CHAINING.

//Note that: the new keyword approach does the same thing as Object.create() but only makes it easier as it does some things automatically for you.

//And so...
//Every object in Javascript has access to the Object's prototype by default. If configured to use another prototype, say prototype2, 
//then prototype2 would also have access to the Object's prototype by default, and so on.

//Object + Function Combination
//You are probably confused by the fact that DogObject is a function (function DogObject(){}) and it has properties accessed with a dot notation. 
//This is referred to as a function object combination.

//When functions are declared, by default they are given a lot of properties attached to it. Remember that functions are also objects in JavaScript data types.
