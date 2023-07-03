const getListStudentIds = (listStudents) => {
    let listStudentIds = [];
    if(!(listStudents instanceof Array)){
        return listStudentIds;
    }
    listStudentIds = listStudents.map(student => student.id);
    return listStudentIds;
}
/* eslint-disable */
export default getListStudentIds;