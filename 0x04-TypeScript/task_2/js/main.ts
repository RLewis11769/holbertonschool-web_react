// Add functions including multiple arg type options
// Add function with default arg type
// Add function using string literal type

/* DIRECTOR */
interface DirectorInterface {
  // Interface to validate returns of Director class methods
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

class Director implements DirectorInterface {
  // Methods of Director class with returns validated by DirectorInterface

  workFromHome() {
    // Return whether director can work from home
    return 'Working from home';
  }

  getToWork() {
    // Returns what director does when getting to work
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    // Returns director starting tasks
    return 'Getting to director tasks'
  }
}
// const d1 = new Director();
// console.log(d1.workFromHome());


/* TEACHER */
interface TeacherInterface {
  // Interface to validate returns of Teacher class methods
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Teacher implements TeacherInterface {
  // Methods of Teacher class with returns validated by TeacherInterface

  workFromHome() {
    // Returns whether teacher can work from home
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    // Returns whether teacher can take a coffee break
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    // Returns teacher starting tasks
    return 'Getting to work';
  }
}
// const t1 = new Teacher();
// console.log(t1.workTeacherTasks());


/* SHARED */
function createEmployee(salary: number | string) {
  // Accepts salary and returns new Director/Teacher instance based on salary
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$10'));


function isDirector(employee: Director | Teacher): employee is Director {
  // Function that returns which class employee is - True if Director
  return (employee instanceof Director);
}
// console.log(isDirector(createEmployee(200)));


function executeWork(employee: Director | Teacher) {
  // Calls class method depending on class of employee
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}
// console.log(executeWork(createEmployee(1000)));


// String literal type with two possible values
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  // Returns string based on which Subject passed in
  if (todayClass === 'Math') return 'Teaching Math';
  else return 'Teaching History';
}
// console.log(teachClass('Math'));
// // Note that this prints in console! But error is thrown for TS compiler
// console.log(teachClass('Gym'));
