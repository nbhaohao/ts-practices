function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Son(friends) {
  this.friends = friends;
}

const person = new Person("zzh", 1);
// 原型链继承
Son.prototype = person;

const son = new Son(["小红"]);
console.log("person", person);
console.log("son", son);
console.log("Son.prototype", Son.prototype);
