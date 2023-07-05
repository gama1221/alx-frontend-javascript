// Student Interface

interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 {
  firstName: 'Mpilo';
  lastName: 'Mafu';
  age: 28;
  location: 'South Africa'
}

const student2 {
  firstName: 'Mihlali';
  lastName: 'Mafu';
  age: 26;
  location: 'South Africa';
}

const studentList = [student1, student];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
