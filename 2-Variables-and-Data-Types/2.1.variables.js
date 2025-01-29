// Declaring variables using 'let', 'const', and 'var'


// let(Block Scoped)
let name = "Ovi";
let age = 25;
let isStudent = true;
let hobbies = ["Coding", "Reading", "Secret"];
let score = 95.7; //secret
console.log(name, hobbies,score)



// const (block scoped, cant'nt reassigned)
const birthYear = 1999;
const pi = 3.14159;

console.log(birthYear, pi)


// var (Function Scoped, can be reassigned, but should generally be avoid)

var city = "Dhaka";
var language = "BN"
console.log(city, language)