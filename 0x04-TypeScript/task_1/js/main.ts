// Create object with optional parameters

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher({firstName, lastName}: Teacher) {
  // Returns first character of first name and last name
  return `${firstName.slice(0, 1)}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}