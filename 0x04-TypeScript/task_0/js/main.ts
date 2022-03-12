// Create interface for student and array of two students of Student type
// Render table and append rows to table

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Requires all fields filled out
const student1: Student = {
  firstName: 'Shadow',
  lastName: 'Lewis',
  age: 4,
  location: 'Earth'
}

const student2: Student = {
  firstName: 'Vader',
  lastName: 'Lewis',
  age: 3,
  location: 'Mustafar'
}

// // TS definition for one object (as opposed to interface for group)
// const student3: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   location: string;
// } = {
//   firstName: "Rachel",
//   lastName: "Lewis",
//   age: 500,
//   location: "Tulsa"
// };

// Array of type Student with student1 and student2 data
const studentsList: Array<Student> = [student1, student2];

// Create table
const table = document.createElement('table');
// For each student in studentsList, create a row and append to table
studentsList.forEach((student) => {
  // Create row and append to table
  const row = table.insertRow();
  // Add firstname and lastname cell in row
  const firstname = row.insertCell();
  const location = row.insertCell();
  // Add data from studentList into cell HTML
  firstname.innerHTML = student.firstName;
  location.innerHTML = student.location;
});

// Add table to DOM
document.body.appendChild(table);
