function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Son(friends) {
  this.friends = friends;
}

const person = new Person("zzh", 1);
// 原型链继承
Son.prototype = Person.prototype;
// 由于 prototype 被重新赋值了，所以这里需要挂一下 constructor 属性
// 但是这样会同时覆盖掉 Person.prototype 的值，
Son.prototype.constructor = Son;
const son = new Son(["小红"]);
console.log("person", person);
console.log("son", son);
console.log("Son.prototype", Son.prototype);
console.log("Person.prototype", person);
