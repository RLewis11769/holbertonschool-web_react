// Create interface for student and array of two students of Student type
// Render table and append rows to table

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Requires all fields filled out
let student1: Student = {
    firstName: 'Shadow',
    lastName: 'Lewis',
    age: 4,
    location: 'Earth'
}

let student2: Student = {
    firstName: 'Vader',
    lastName: 'Lewis',
    age: 3,
    location: 'Mustafar'
}

let studentsList: Array<Student> = [student1, student2];

// for (student of studentsList) {
//   console.log(student)
// }

studentsList.forEach(student => {
    console.log(student);
})
