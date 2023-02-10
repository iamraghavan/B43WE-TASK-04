let obj1 = {name: "Person 1", age:5};
let obj2 = { age:5, name: "Person 1" };

let compareJSON = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(compareJSON);

