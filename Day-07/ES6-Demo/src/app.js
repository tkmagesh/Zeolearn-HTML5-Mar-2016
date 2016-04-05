console.log("hello world");
import * as math from "./math.js";
import Employee from './emp.js';

let add = (x,y) => x + y;

let emp = new Employee(100, 'Magesh', 10000);
emp.display();

console.log(`emp id is ${emp.id}`);

let {id, name} = emp;

let sum = (...list) => list.reduce((result, n) => result + n);

var numbers = [10,20,30,40,50];

console.log(sum(...numbers));


console.log(math.pi);