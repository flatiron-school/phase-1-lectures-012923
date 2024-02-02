const students = [
  {
    name: "John Doe",
    age: 20,
    grade: 3.8,
    subjects: ["Mathematics", "Physics", "English"],
  },
  {
    name: "Jane Smith",
    age: 19,
    grade: 3.9,
    subjects: ["Biology", "Chemistry", "History"],
  },
  {
    name: "Michael Johnson",
    age: 21,
    grade: 3.5,
    subjects: ["Computer Science", "Literature", "Art"],
  },
  {
    name: "Emily Brown",
    age: 18,
    grade: 4.0,
    subjects: ["Geography", "Spanish", "Economics"],
  },
  {
    name: "David Wilson",
    age: 22,
    grade: 3.6,
    subjects: ["Music", "Physical Education", "Psychology", "Reading"],
  },
  {
    name: "Sophia Martinez",
    age: 20,
    grade: 3.7,
    subjects: ["Sociology", "Statistics", "Drama"],
  },
  {
    name: "Ethan Taylor",
    age: 19,
    grade: 3.9,
    subjects: ["Anthropology", "Philosophy", "French"],
  },
  {
    name: "Olivia Anderson",
    age: 21,
    grade: 3.8,
    subjects: ["Environmental Science", "Political Science", "Astronomy"],
  },
  {
    name: "William Thomas",
    age: 20,
    grade: 3.7,
    subjects: ["Engineering", "Design", "Ethics"],
  },
];

// ! Student management system
// * Display all students from the list
// * Student info should be displayed in the following format:
// * div with class "student-card" -> h2 with student name -> p with student age -> p with student grade -> ul with id "subject-list" -> li for each subject

// for each one student i need to create some html ->

let studentList = document.querySelector("#student-list");

let form = document.querySelector("#studentForm");

function renderStudentCard(student) {
  let div = document.createElement("div");
  div.className = "student-card";

  let h2 = document.createElement("h2");
  h2.textContent = student.name;

  let ageP = document.createElement("p");
  ageP.textContent = student.age;

  let gradeP = document.createElement("p");
  gradeP.textContent = student.grade;

  let ul = document.createElement("ul");

  div.append(h2, ageP, gradeP, ul);
  studentList.append(div);

  let subjects = student.subjects;

  for (let subject of subjects) {
    let li = document.createElement("li");
    li.textContent = subject;
    ul.append(li);
  }
}

for (let student of students) {
  //   console.log(student.subjects);
  renderStudentCard(student);
}

const handleSubmit = (e) => {
  e.preventDefault();

  let newStudent = {
    name: e.target.name.value,
    age: e.target.age.value,
    grade: e.target.grade.value,
    subjects: [],
  };

  renderStudentCard(newStudent);
};

form.addEventListener("submit", handleSubmit);

// loop over the array
// for each student create a student card

console.log(students);