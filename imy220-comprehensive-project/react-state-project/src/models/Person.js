class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._name = value;
    }
  }

  get age() {
    return this._age;
  }

  greet() {
    return `Hello, I'm ${this._name}`;
  }

  static compareAge(person1, person2) {
    return person1.age - person2.age;
  }
}