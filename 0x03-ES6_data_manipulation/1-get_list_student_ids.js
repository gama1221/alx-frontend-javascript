export default function getListStudentIds(listStudents) {
  /* eslint-disable */
  let listStudentIds = [];
  if (!(listStudents instanceof Array)) {
      return listStudentIds;
  }
  listStudentIds = listStudents.map(student => student.id);
  return listStudentIds;
}