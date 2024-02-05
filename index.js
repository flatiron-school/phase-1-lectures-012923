// fetch() - API
console.log("Starting fetch");

fetch("https://large-sunset-yttrium.glitch.me/students/")
  .then((response) => response.json())
  .then((students) => {
    for (let student of students) {
      renderStudentCard(student);
    }
  });

console.log("End of fetch");

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

//
// <!-- <div class="advisor-card">
//           <h2>Advisor Name</h2>
//           <p>email@amsdmas</p>
//           <p>2131241324</p>
//         </div> --> append it to "advisor-container div"

// GET : https://large-sunset-yttrium.glitch.me/advisors