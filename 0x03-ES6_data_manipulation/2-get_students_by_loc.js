export default function getStudentsByLocation(students, location) {
  /* eslint-disable */
  let studentsByLocation = [];
  studentsByLocation = students.filter(student => student.location === location);
  return studentsByLocation;
}