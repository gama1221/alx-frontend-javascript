// Teachers Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string
  [propName: string]: any;
}

// Directors Interface
interface Directors extends Teacher {
  numberOfReports: number
}

// Creating a Teacher and a Director
const teacher3: Teacher = {
  firstName: 'John';
  lastName: 'Doe';
  location: 'Spain';
  fullTimeEmployee: false;
  contract: false;
};
console.log(teacher3);

const director1: Directors= {
  firstName: 'John';
  lastName: 'Doe';
  location: 'London';
  fullTimeEmployee: true;
  numbeOfReports: 17;
};
console.log(director1);

// prints a Teachers name in this format: J. Doe
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Harley', 'Searle'));

// studentClass description interface
interface studentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// constructor description interface
interface classConstructor {
  new (firstName: string, lastName: string): studentClassInterface;
}
// Creating class and constructor through interfaces
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// creating instance of StudentClass
const studentClass: StudentClass = new StudentClass('Nora', 'Sanchez');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
