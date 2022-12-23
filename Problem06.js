class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
} 
class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");
console.log(clara.sing());
console.log(clara.whiskers());
// Expected Output
// "Clara can sing"
// "I have indigo whiskers"
//You'll notice that clara has a __proto__ property which references the constructor Cats and gets access to the whiskers() method. 
//This __proto__ property also has a __proto__ property which references the constructor Animals thereby getting access to sing() and dance(). name and age are 
//properties that exist on every object created from this.
