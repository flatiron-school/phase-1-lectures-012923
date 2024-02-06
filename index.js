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

  div.style.backgroundColor = student.isStudent ? "Green" : "Grey";

  let h2 = document.createElement("h2");
  h2.textContent = student.name;

  let ageP = document.createElement("p");
  ageP.textContent = student.age;

  let gradeP = document.createElement("p");
  gradeP.textContent = student.grade;

  let ul = document.createElement("ul");

  // ! TASK 1. Create a delete button and make a delete request, should delete the card from the DOM as well

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  deleteButton.style.backgroundColor = "transparent";

  deleteButton.addEventListener("click", () => {
    // deleteStudent(student.id, div);
    fetch(`https://large-sunset-yttrium.glitch.me/students/${student.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => div.remove());
  });

  // ! TAST 2. Render a button "Active Student". Mark student to true/false, by clicking the buttong and patching isStudent: true/false. If the value of isStudent is true button text should be "Active Student". If the value of isStudent is false the button text should say: "Inactive Student"

  let activeStudentButton = document.createElement("button");
  activeStudentButton.textContent = student.isStudent
    ? "Mark Inactive"
    : "Mark active";

  activeStudentButton.addEventListener("click", () => {
    fetch(`https://large-sunset-yttrium.glitch.me/students/${student.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        isStudent: !student.isStudent,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        activeStudentButton.textContent = data.isStudent
          ? "Mark Inactive"
          : "Mark active";

        div.style.backgroundColor = data.isStudent ? "Green" : "Grey";
      });
  });

  div.append(h2, ageP, gradeP, ul, activeStudentButton, deleteButton);
  studentList.append(div);

  let subjects = student.subjects;

  subjects.forEach((subject) => {
    let li = document.createElement("li");
    li.textContent = subject;
    ul.append(li);
  });
  //   for (let subject of subjects) {
  //     let li = document.createElement("li");
  //     li.textContent = subject;
  //     ul.append(li);
  //   }
}

function deleteStudent(id, div) {
  fetch(`https://large-sunset-yttrium.glitch.me/students/${id}`, {
    method: "DELETE",
  });
  div.remove();
}

const handleSubmit = (e) => {
  e.preventDefault();

  let newStudent = {
    name: e.target.name.value,
    age: e.target.age.value,
    grade: e.target.grade.value,
    isStudent: true,
    subjects: [],
  };

  // take the object above and post it to the server
  fetch("https://large-sunset-yttrium.glitch.me/students", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newStudent),
  })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      renderStudentCard(data);
    });
};

form.addEventListener("submit", handleSubmit);

// loop over the array
// for each student create a student card

fetch("https://large-sunset-yttrium.glitch.me/advisors")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((advisor, index) => {
      console.log(index);
      renderAdvisorCard(advisor);
    });
  });

let advisorContainerDiv = document.querySelector(".advisor-container");

function renderAdvisorCard(advisor) {
  //   advisor => name, email, phone
  let div = document.createElement("div");
  div.className = "advisor-card";

  let h2 = document.createElement("h2");
  h2.textContent = advisor.name;

  let emailP = document.createElement("p");
  emailP.textContent = advisor.email;

  let phoneP = document.createElement("p");
  phoneP.textContent = advisor.phone;

  div.append(h2, emailP, phoneP);
  advisorContainerDiv.append(div);
}

//
// <!-- <div class="advisor-card">
//           <h2>Advisor Name</h2>
//           <p>email@amsdmas</p>
//           <p>2131241324</p>
//         </div> --> append it to "advisor-container div"

// GET : https://large-sunset-yttrium.glitch.me/advisors
