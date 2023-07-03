const getStudentIdsSum = (students) => {
  const initailValue = 0;
  const studentIdsSum = students.reduce((accomulator, currentValue) => accomulator + currentValue.id, initailValue);
  return studentIdsSum;
}
/* eslint-disable */
export default getStudentIdsSum;