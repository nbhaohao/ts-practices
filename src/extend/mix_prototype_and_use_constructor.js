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

const person = new Person("张三", 18);
console.log(person);
// 即使构造 person 的时候传了 name, age，但是在创建 Man 实例的时候，会传递新的值做覆盖
Man.prototype = person;
const man = new Man(["play"], "王五", 19);
console.log(man);
