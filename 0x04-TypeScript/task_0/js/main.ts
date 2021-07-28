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

// Array of type Student with student1 and student2 data
const studentsList: Array<Student> = [student1, student2];

// Create table
const table = document.createElement('table');
// For student1 and student2
studentsList.forEach(function(student) {
  // Create row
  const row = table.insertRow();
  // Add firstname and lastname cell in row
  const firstname = row.insertCell();
  const location = row.insertCell();
  // Add data from studentList as html
  firstname.innerHTML = student.firstName;
  location.innerHTML = student.location;
  });
// Add data to table
document.body.appendChild(table);
