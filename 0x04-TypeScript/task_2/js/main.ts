// 2 Interfaces with methods
// 2 classes with interfaces
// Function (with interface presumably?)
// Function to test which class instance is
// Function that uses previous function and calls class methods

interface DirectorInterface {
  // Interface to validate returns of Director class methods
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  // Interface to validate returns of Teacher class methods
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
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

function createEmployee(salary: number | string) {
  // Accepts salary and returns new Director/Teacher instance based on salary
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  // Function that returns which class employee is - True if Director
  return (employee instanceof Director);
}

function executeWork(employee: Director | Teacher) {
  // Calls class method depending on class of employee
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}
