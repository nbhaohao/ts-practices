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

function _extend(parentClass, subClass) {
  function Middle() {
    this.constructor = subClass;
  }
  Middle.prototype = parentClass.prototype;
  return new Middle();
}

// 使用封装的继承函数来实现
// 可以使用 Man.prototype = Object.create(Person.prototype) 代替
Man.prototype = _extend(Person, Man);
const man = new Man(["play"], "王五", 19);
const person = new Person("zz", 18);
console.log(man);
console.log(person);
