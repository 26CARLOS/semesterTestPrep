class Student extends Person {
  constructor(name, age, studentId, courses = []) {
    super(name, age);
    this._studentId = studentId;
    this._courses = courses;
  }

  get studentId() {
    return this._studentId;
  }

  get courses() {
    return this._courses;
  }

  addCourse(course) {
    this._courses = [...this._courses, course];
  }

  greet() {
    return `${super.greet()} and I'm a student with ID: ${this._studentId}`;
  }
}