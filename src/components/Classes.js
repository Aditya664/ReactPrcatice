class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('Teach');
    }
}

const teacher = new Teacher('Adi', 'MCA');
teacher.walk();
teacher.teach();
teacher.name = 'Rupesh';
