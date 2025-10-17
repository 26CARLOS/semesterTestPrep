// Person and Student Classes - ES6 Class Inheritance

// ===== Person Class =====
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

    set age(value) {
        if (typeof value === 'number' && value > 0) {
            this._age = value;
        }
    }

    greet() {
        return `Hello, I'm ${this._name}`;
    }

    static compareAge(person1, person2) {
        return person1.age - person2.age;
    }

    static compareName(person1, person2) {
        return person1.name.localeCompare(person2.name);
    }
}

// ===== Student Class (extends Person) =====
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
        if (!this._courses.includes(course)) {
            this._courses.push(course);
        }
    }

    removeCourse(course) {
        this._courses = this._courses.filter(c => c !== course);
    }

    greet() {
        return `${super.greet()} and I'm a student with ID: ${this._studentId}`;
    }

    toString() {
        return `Student: ${this.name} (${this.age}), ID: ${this.studentId}, Courses: ${this.courses.join(', ')}`;
    }
}
