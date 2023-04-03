const MAX_ATT_NOTES_LENGTH = 25;

class Student {
    #firstName;
    #lastName;
    #birthdate;
    #marks;
    #attendance;

    constructor(firstName, lastName, birthdate, marks) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#birthdate = birthdate;
        this.#marks = marks;
        this.#attendance = [];
    }

    get firstName() {
        return this.#firstName;
    }
    set firstName(value) {
        if (!isNaN(value)) {
            console.log("Number can't be a First Name");
        } else {
            this.#firstName = value;
        }
    }
    get lastName() {
        return this.#lastName;
    }
    set lastName(value) {
        if (!isNaN(value)) {
            console.log("Number can't be a Last Name");
        } else {
            this.#lastName = value;
        }
    }
    get attendance() {
        return this.#attendance;
    }

    get averageMark() {
        let sum = 0;
        this.#marks.forEach(mark => sum += mark);
        return Math.floor(sum / this.#marks.length);
    }
    get age() {
        return Math.floor((new Date() - this.#birthdate) / (365 * 24 * 60 * 60 * 1000));
    }
    get attendanceRatio() {
        let presentTimes = 0;
        this.#attendance.forEach(value => { if (value) presentTimes++ });
        return presentTimes / this.#attendance.length;
    }
    get summary() {
        let message = "Добре, але можна краще.";
        if (this.attendanceRatio >= 0.9 && this.averageMark >= 90) {
            message = "Молодець!";
        }
        else if (this.attendanceRatio < 0.9 && this.averageMark < 90) {
            message =  "Треба краще.";
        }
        return message;
    }

    present() {
        this.#addAttendanceNote(true);
    }
    absent() {
        this.#addAttendanceNote(false);
    }

    #addAttendanceNote(value) {
        if (this.#attendance.length < MAX_ATT_NOTES_LENGTH) {
            this.#attendance.push(value);
        } else {
            console.log('Attendance list is full');
        }
    }
}

const student = new Student('John', 'Travolta', new Date(1988,12,25), [100, 40, 90]);
console.log(`Ім'я: ${student.firstName}`);
student.firstName = 1;
console.log(`Прізвище: ${student.lastName}`);
student.lastName = 1;
console.log(`Вік: ${student.age}`);

console.log(`Середній бал: ${student.averageMark}`);
for (let i = 0; i < 27; i++) {
    if (i % 2 === 0) {
        student.present();
    } else {
        student.absent();
    }
}
console.log(student.attendance.length);
console.log(`Присутність: ${student.attendanceRatio}`);
console.log(student.summary);
const student2 = new Student('Jackie', 'Chan', new Date(1980,10,15), [100, 90, 90]);
console.log(`Ім'я: ${student2.firstName}`);
console.log(`Прізвище: ${student2.lastName}`);
console.log(`Вік: ${student2.age}`);

console.log(`Середній бал: ${student2.averageMark}`);
for (let i = 0; i < 25; i++) {
    student2.present();
}
console.log(`Присутність: ${student2.attendanceRatio}`);;
console.log(student2.summary);
const student3 = new Student('Bruce', 'Lee', new Date(1978,11,20), [100, 40, 90]);
console.log(`Ім'я: ${student3.firstName}`);
console.log(`Прізвище: ${student3.lastName}`);
console.log(`Вік: ${student3.age}`);

console.log(`Середній бал: ${student3.averageMark}`);
for (let i = 0; i < 25; i++) {
    student3.present();
}
console.log(`Присутність: ${student3.attendanceRatio}`);
console.log(student3.summary);
