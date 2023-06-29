
export default class HolbertonCourse {
  /* eslint-disable */
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a String');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError("Length must be a number");
    }
    if (!Array.isArray(students) && students.every((item) => typeof item !== 'string')) {
      throw TypeError('Students must be a string of arrays');
    } else {
      this._students = students;
    }
  }
  set name(Name) {
    if (typeof Name !== 'string') {
      throw TypeError('Name must be a String');
    } else {
      this._name = Name;      
    }
  }
  get name() {
    return this._name;
  }
  set length(Length) {
    if (typeof Length !== 'number') {
      throw TypeError("Length must be a number");
    } else {
      this._length = Length;
    }    
  }
  get length() {
    return this._length;
  }
  set students(Students) {
    if (!Array.isArray(Students) && Students.every((item) => typeof item !== 'string')) {
      throw TypeError('Students must be a string of arrays');
    } else {
      this._students = Students;
    }
  }
  get students(){
    return this._students;
  }
}