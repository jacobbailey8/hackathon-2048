//manually creating objects
/*let person = {
    age: 18,
    height: 62,
    iq: 200,

    talk(msg) {
        console.log(msg);
    }
}

let person2 = {
    age: 35,
    height: 54,
    iq: 120,

    talk(msg) {
        console.log(msg);
    }
} */

//acts as template for person objects
class Person {
    constructor(a, h, i) {
        this.age = a;
        this.height = h;
        this.iq = i;
    }
    talk() {
        console.log("Hello! I am " + this.age + " years old.");
    }
}

let luke = new Person(18, 62, 400); //runs the class constructor
luke.talk();
let devin = new Person(19, 60, 401);
devin.talk();
let jake = new Person(20, 59, 399);
jake.talk();