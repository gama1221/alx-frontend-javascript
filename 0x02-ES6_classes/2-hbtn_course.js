
export default class HolbertonCourse{
  /* eslint-disable */
  constructor(name, length, students){
    if(typeof name === 'string'){
      this._name = name;
    }else{
      throw TypeError('Name must be a String');
    }
    if(typeof length === 'number'){
      this._length = length;
    }else{
      throw TypeError("Length must be a number");
    }
    if(!Array.isArray(students) && students.every((item) => typeof i !== 'string')){
      throw TypeError('Students must be a string of arrays');
    }else{
      this._students = students;
    }
  }
  setName(name){
    if(typeof name !== 'string'){
      throw TypeError('Name must be a String');
    }else{
      this._name = name;      
    }
  }
  getName(){
    return this._name;
  }
  setLength(length){
    if(typeof length !== 'number'){
      throw TypeError("Length must be a number");
    }else{
      this._length = length;
    }    
  }
  getLength(){
    return this._length;
  }
  setStudents(students){
    if(!Array.isArray(students) && students.every((item) => typeof i !== 'string')){
      throw TypeError('Students must be a string of arrays');
    }else{
      this._students = students;
    }
  }
  getStudents(){
    return this._students;
  }
}