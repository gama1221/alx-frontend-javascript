export default function getStudentIdsSum(students) {
  /* eslint-disable */
  const initailValue = 0;
  const studentIdsSum = students.reduce((accomulator, currentValue) => accomulator + currentValue.id, initailValue);
  return studentIdsSum;
}