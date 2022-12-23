function Animals(name, specie) {
    this.name = name;
    this.specie = specie;
}
Animals.prototype.sing = function(){
    return `${this.name} can sing`;
}
Animals.prototype.dance = function() {
    return `${this.name} can dance`;
}
let Bingo = new Animals("Bingo", "Hairy");

//The __proto__ references the Animals prototype (which in turn references the Object prototype).

//From this, we can see that the constructor defines the major features while everything outside the constructor (sing() and dance()) are the bonus features (prototypes).
