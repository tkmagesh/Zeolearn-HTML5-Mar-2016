let idSymbol = Symbol();

export default class Employee{
	constructor(id, name, salary){
		this[idSymbol] = id;
		this.name = name;
		this.salary = salary;
	}
	get id (){
		return this[idSymbol];
	}
	display (){
		console.log(`id = ${this[idSymbol]}, name = ${this.name}, salary = ${this.salary}`);
	}
}