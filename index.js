// TypeError: Cannot set Property which has only a Getter in JS

// EXAMPLE 1 - Define a setter for the property you are trying to update

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get name() {
    return `${this.first} ${this.last}`;
  }

  // 👇️ Define setter
  set name(name) {
    this.first = name.split(' ')[0];
    this.last = name.split(' ')[1];
  }
}

const p1 = new Person('John', 'Smith');

// ✅ Use setter
p1.name = 'Bobby Hadz';

console.log(p1.name); // 👉️ "Bobby Hadz"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Make sure you aren't trying to set a property by mistake

// class Person {
//   constructor(name) {
//     // 👇️ this causes the error
//     this.name = name;
//   }

//   // 👇️ getter
//   get name() {
//     return `Name: ${this.name}`;
//   }
// }

// // ⛔️ TypeError: Cannot set property name of #<Person> which has only a getter
// const p1 = new Person('bobby hadz');

// ------------------------------------------------------------------

// // EXAMPLE 3 - Renaming the getter function

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   // 👇️ getter
//   get get_name() {
//     return `Name: ${this.name}`;
//   }
// }

// const p1 = new Person('bobby hadz');

// console.log(p1.get_name); // 👉️ Name: bobby hadz
