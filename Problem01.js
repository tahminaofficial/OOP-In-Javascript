let names = {
    fname: "Dillion",
    lname: "Megida"
}
console.log(names.fname);
console.log(names.hasOwnProperty("mname"));
console.log(names);

// Expected Output
// Dillion
// false
//The object variable names has only two properties - fname and lname . No methods at all.

//So where does hasOwnProperty come from?

//Well, it comes from the Object prototype.
