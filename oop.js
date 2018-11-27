//Write 5 object literals, have them named person1-person5. 
//Give each a name property and have this be a name of a friend or family member.
//Then give each one a second property, sayHello, 
//which is a function that will console log the string “Hello! My name is ________”.

//Object Literal
//person1
/*let person1 = {
    name: {
        first: 'Michella',
    },
    sayHello: function() {
        alert(`Hello! My name is ${this.name.first}.`);
    }
}

console.log(person1.name.first);
console.log();
person1.sayHello();

//person2
let person2 = {
    name: {
        first: 'Gerald',
    },
    sayHello: function() {
        alert(`Hello! My name is ${this.name.first}.`);
    }
}

console.log(person2.name.first);
console.log();
person2.sayHello();

//person3
let person3 = {
    name: {
        first: 'Sharrell',
    },
    sayHello: function() {
        alert(`Hello! My name is ${this.name.first}.`);
    }
}

console.log(person3.name.first);
console.log();
person3.sayHello();

//person4
let person4 = {
    name: {
        first: 'Destini',
    },
    sayHello: function() {
        alert(`Hello! My name is ${this.name.first}.`);
    }
}

console.log(person4.name.first);
console.log();
person4.sayHello();

//person5
let person5 = {
    name: {
        first: 'Carter',
    },
    sayHello: function() {
        alert(`Hello! My name is ${this.name.first}.`);
    }
}

console.log(person5.name.first);
console.log();
person5.sayHello();


//pseudo classes
//constructor function with a name, city, and age

function Person (name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

//Write a method that will print a string
Person.prototype.sayHello = function() {
    alert('Hey! My name is ' + this.name + '. I am ' + this.age + ' years old and live in ' + this.city + '.');
}

//Create 5 instances of names above, using pseudo class and method we just created

let p1 = new Person('Michella', 27, 'Birmingham');
let p2 = new Person('Gerald', 29, 'Lanett');
let p3 = new Person('Sharrell', 35, 'Sweet Water');
let p4 = new Person('Destini', 8, 'McCalla');
let p5 = new Person('Carter', 3, 'McCalla');
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

//ES6 syntax

class People {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    sayHello() {
        alert(`${this.name} is ${this.age} years old and live in ${this.city}.`);
    }
}

let p6 = new People('Michella', 27, 'Birmingham');
let p7 = new People('Gerald', 29, 'Lanett');
let p8 = new People('Sharrell', 35, 'Sweet Water');
let p9 = new People('Destini', 8, 'McCalla');
let p10 = new People('Carter', 3, 'McCalla');
p6.sayHello();
p7.sayHello();
p8.sayHello();
p9.sayHello();
p10.sayHello();

//Extra Practice. Adding pronouns
class People1 {
    constructor(name, age, city, bdaymonth, gender){
        this.name = name;
        this.age = age;
        this.city = city;
        this.bdaymonth = bdaymonth;
        this.gender = gender;
    }
    sayHello() {
        alert(`${this.name} was born in ${this.bdaymonth}. ${this.gender} is ${this.age} years old and live in ${this.city}.`);
    }
}

let p11 = new People1('Michella', 27, 'Birmingham', 'December', 'She');
let p12 = new People1('Gerald', 29, 'Lanett', 'June', 'He');
let p13 = new People1('Sharrell', 35, 'Sweet Water', 'Feburary', 'She');
let p14 = new People1('Destini', 8, 'McCalla', 'September', 'She');
let p15 = new People1('Carter', 3, 'McCalla', 'March', 'He');
p11.sayHello();
p12.sayHello();
p13.sayHello();
p14.sayHello();
p15.sayHello();*/


//Inheritance

class Vehicle {
    constructor(type, make, wheels) {
        this.type = type;
        this.make = make;
        this.wheels = wheels;

    }

    aboutVehicle() {
        console.log(`This Vechicle is a ${this.type} , and it is made by ${this.make} , and has ${this.wheels} wheels.`);
    }
}
let v1 = new Vehicle('Truck', 'Ford', 4);
v1.aboutVehicle();


class Truck extends Vehicle {
    constructor(type, make, wheels, doors, bed) {
        super(type, make, wheels);
        this.doors = doors;
        this.bed = true;
    }
    aboutVehicle() {
        console.log(`This Vechicle is a ${this.type} , and it is made by ${this.make} , and has ${this.wheels} wheels. This truck only has ${this.doors} doors, and it is ${this.bed} that it has a bed.`);
    }
}

let v2 = new Truck('Truck', 'Ford', 4, 2, 'true');
v2.aboutVehicle();


class Sedan extends Vehicle {
    constructor(type, make, wheels, doors, size, mpg) {
        super(type, make, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This Vechicle is a ${this.type} , and it is made by ${this.make} , and has ${this.wheels} wheels. This is a ${this.size} sedan, and the mpg is ${this.mpg}.`);
    }
}
let v3 = new Sedan('Sedan', 'Maza', 4, 2, 'large', '30 mpg');
v3.aboutVehicle();

class Motorcycle extends Vehicle {
    constructor(type, wheels, handleBars, noDoors) {
        super(type, wheels);
        this.handleBars = handleBars;
        this.noDoors = noDoors;
    }

    aboutVehicle() {
        console.log(`This vehicle is a ${this.type} and has ${this.wheels} wheels. The motorcyle has a ${this.handleBars} and ${this.noDoors}.`);
    }
}
let v4 = new Motorcycle('Motorcycle', 2, 'handlebar', 'nodoors');
v4.aboutVehicle();