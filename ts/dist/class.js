class Person {
    constructor(name, age) {
        this.status = "active";
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and ${this.age} years old`);
    }
    sleep() {
    }
}
Person.ifLived = true;
class Superman extends Person {
    fly() {
        console.log('I can fly');
    }
}
const person1 = new Person("John", 15);
console.log(person1);
person1.sayHello();
const superman1 = new Superman("Shuang", 18);
console.log(`i am ${superman1.status}`);
superman1.sayHello();
superman1.fly();
