function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = () => {
  console.log("Hi");
};

function Man(hobbies, name, age) {
  // 在构造函数内部调用父类构造函数，从而达到复用的目的
  Person.apply(this, [name, age]);
  this.hobbies = hobbies;
}

function Middle() {}
Middle.prototype = Person.prototype;

// 使用一个中间函数来代替构造父类实例的做法
Man.prototype = new Middle();
// 完善构造器的指向
Man.prototype.constructor = Man;
const man = new Man(["play"], "王五", 19);
const person = new Person("zz", 18);
console.log(man);
console.log(person);
