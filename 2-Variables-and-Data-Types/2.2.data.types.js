// * Primitive Data Types

// String 
let name ="ovi";
console.log(name)

// Number 
let age = 30 
let price = 19.19;
console.log(age, price)


// Bollean 
let isActive = true;
let isComplete = false;

console.log(isActive, isComplete)

// Undefined 
let value;
console.log(value)

// Null 
let person = null;
console.log(person)

// Symbol 
let uniqueKey = Symbol("id");
console.log(uniqueKey)

// BigInt
let bigNumber = 12345678511003548989;
const bigNumber2 = BigInt("1234567890123456789012345678901234567890");

console.log(bigNumber, bigNumber2)




// Refences type  

let person2 = {name: "Ovi", age: 30};
let score = [1,2,3,4,5];
console.log(person2, score)

// Reference Type Mutation
let obj = {id: 1, title: "mutation"};
let newObj = obj;
newObj.id = 35;
console.log("Modified Object", obj)