const getStudentsByLocation  = (students, location)=>{
    let studentsByLocation = [];
    studentsByLocation = students.filter(student=>student.location === location);
    return studentsByLocation;
}

/* eslint-disable */
export default getStudentsByLocation;