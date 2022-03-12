// Defines teacher/director object and functions (and interfaces)
// Defines student class (and interfaces)

/* TEACHER */
export interface Teacher {
  // Interface for Teacher object (and parent interface for Directors)
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // Optional parameter of any type - could be multiple
  [key: string]: any;
}

// const t1: Teacher = {
//   firstName: 'Shadow',
//   fullTimeEmployee: false,
//   lastName: 'Lewis',
//   location: 'Earth',
//   // Note: contract is optional parameter
//   contract: false
// };
// console.log(t1);


/* DIRECTOR */
export interface Directors extends Teacher {
  // Child interface with all properties from Teacher
  numberOfReports: number;
}

// const d1: Directors = {
//   firstName: 'Vader',
//   lastName: 'Lewis',
//   location: 'Mustafar',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(d1);


/* SHARED */
export interface printTeacherFunction {
  // Describes arguments and return of printTeacher function
  // Note: not explicitly referenced in function
  (firstName: string, lastName: string): string;
}

function printTeacher({firstName, lastName}: Teacher): string {
  // Returns first character of first name and last name - as string
  // Notice args are destructured args from Teacher interface
  return `${firstName.slice(0, 1)}. ${lastName}`;
}

// console.log(printTeacher(d1));


/* STUDENT */
export interface StudentClassInterface {
  // Describes returns of methods for StudentClass class
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentClassConstructor {
  // Describes types of args passed into StudentClass constructor
  // Note: not explicitly referenced in constructor
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  // Attributes and methods of StudentClass class

  // Defines attributes required when new instance of StudentClass is created
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    // Sets attributes when new instance of StudentClass is created
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    // Returns string when called (as described in StudentInterface)
    return 'Currently working';
  }

  displayName() {
    // Returns string when called (as described in StudentInterface)
    return this.firstName;
  }
}

const s1 = new StudentClass('Hello', 'World');
console.log(s1);
console.log(s1.workOnHomework());
