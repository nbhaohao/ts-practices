export class Person {
  constructor(public name: string, public age: number) {}
  sayHi() {
    console.log(`Hi I am ${this.name}.`)
  }
  sayAge() {
    console.log(`I am ${this.age} years old.`)
  }
}
