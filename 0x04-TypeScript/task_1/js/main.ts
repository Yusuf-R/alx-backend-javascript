// Task 1
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any  // Index signature allowing any additional properties
}

// Task 2
interface Directors extends Teacher {
  numberOfReports:number,
}

// Task 3
interface printTeacherFunction {
  (firstName: string, lastName:string): string
}

const printTeacher: printTeacherFunction = (firstName:string, lastName:string): string => `${firstName[0]}. ${lastName}`;


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};//teacher3.firstName = 'Jane';  // Error: Cannot assign to 'firstName' because it is a read-only property
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log();
console.log(printTeacher('John', 'Doe'));

