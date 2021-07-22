// Create object with optional parameters
// Create object extending other object
// Create function with interface
// Create class with interface and constructor interface

interface Teacher {
  // Parent interface
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  // Child interface
  numberOfReports: number;
}

function printTeacher({firstName, lastName}: Teacher) {
  // Returns first character of first name and last name
  return `${firstName.slice(0, 1)}. ${lastName}`;
}

interface printTeacherFunction {
  // Describes required keys/values passed into printTeacher function
  // Describes return as string
  (firstName: string, lastName: string): string;
}

interface StudentInterface {
  // Describes keys/values of instance methods passed into StudentClass class
  firstName: string;
  lastName: string;
}

interface StudentConstructor {
  // Describes required keys/values passed into StudentClass constructor
  new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
  // Attributes and methods of StudentClass class

  constructor(firstName: string, lastName: string) {}

  workOnHomework() {
    // Returns string when called
    return 'Currently working';
  }

  displayName() {
    // Returns string when called
    return this.firstName;
  }
}
