class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);

//Now, Class
//JavaScript introduced the class keyword in ECMAScript 2015. It makes JavaScript seem like an OOP language. 
//But it is just syntatic sugar over the existing prototyping technique. 
//It continues its prototyping in the background but makes the outer body look like OOP. We'll now look at how that's possible.
